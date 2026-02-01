import { promises as fs } from 'fs';
import {
  getSupabaseClient,
  signinClient,
} from '../features/supabase/supabaseClient';
import { AuthResponse, SupabaseClient } from '@supabase/supabase-js';
import {
  addTerm,
  getAllCourses,
  getAllFIles,
  getAllLessons,
  getAllTerms,
  updateCourse,
  updateTermUUID,
} from '../features/supabase/controllers';
import { Term, TermAddingDTO } from '../features/supabase/types';
import _ from 'lodash';
import { findTerm } from '../domain';
import { findDuplicates, toDigitSequence, toSeason } from '../utils';

export async function readMigrationData() {
  const file = await fs.readFile(
    process.cwd() + '/src/test/course-data-backup-20260117.json',
    'utf8',
  );
  const data = JSON.parse(file);
  // console.log("JSON data: ", data);
  return data;
}

export async function addCourse(
  client: SupabaseClient,
  nextCourse: any,
  matchedTermId: string,
) {
  const courseToAdd = {
    id: nextCourse.itemId,
    term_id: matchedTermId,
    title: nextCourse.title,
    description: nextCourse.description || '',
  };
  console.log(
    `Adding course: ${courseToAdd.title}, term_id: ${courseToAdd?.term_id};`,
  );
  const { data: addedCourse, error: addingError } = await client
    .from('course')
    .insert(courseToAdd);
}

export async function addAllTerms(
  client: SupabaseClient,
  nextTermList: any,
  existingTerms: Term[],
) {
  for (const nextTerm of nextTermList) {
    const nextComposedTermID = `${nextTerm.term.startYear}${nextTerm.term.startMonth}`;
    const foundExisting = findTerm(
      nextTerm.term.startYear,
      nextTerm.term.startMonth,
      existingTerms,
    );
    // console.log('Processing term ID:', composedTermID);
    if (!foundExisting) {
      console.debug(`Adding term ${nextComposedTermID}`);
      const nextNameYear = toDigitSequence(nextTerm.term.startYear);
      const nextNameMonth = toDigitSequence(nextTerm.term.startMonth);
      const season = toSeason(nextTerm.term.startMonth);
      const termInRequest: TermAddingDTO = {
        name: nextTerm.name || `${nextNameYear}年${season}主日學`,
        end_year: nextTerm.term.endYear,
        end_month: nextTerm.term.endMonth,
        start_year: nextTerm.term.startYear,
        start_month: nextTerm.term.startMonth,
      };
      await addTerm(client, termInRequest);
    }
  }
}

export async function updateAllExistingTermUUIDs(authedClient: SupabaseClient) {
  const { data: existingTerms, error: fetchingError } = await authedClient
    .from('term')
    .select('*');

  if (fetchingError) {
    console.error('Error fetching terms:', fetchingError);
    return;
  }

  for (const term of existingTerms) {
    if (!term.uuid) {
      await updateTermUUID(authedClient, term.id);
    }
  }
}

describe('Database Tool Tests', () => {
  // beforeAll(() => {});

  test('Run once', async () => {
    await signinClient();
    // const result = await updateAllExistingTermUUIDs(client);
    expect(1).toBe(1);
  });

  test('Run migrate data', async () => {
    let addedIds: string[] = [];

    const nextAllCourses = await readMigrationData();
    const client = getSupabaseClient();
    const existingAllLessons = await getAllLessons();

    console.log('Existing lessons count:', existingAllLessons?.length);
    return;

    const { data, error } = await client.auth.signInWithPassword({
      email: process.env.SUPABASE_TESTING_USER || '<EMAIL>',
      password: process.env.SUPABASE_TESTING_PASSWORD || '<PASSWORD>',
    });
    // console.log('Auth signInWithPassword data:', data);
    // If course is absent, add it

    const nextTermList = nextAllCourses.terms;
    console.log('nextTermList:', nextTermList?.length);
    const existingCourses = await getAllCourses();
    // await addAllTerms(client, nextTermList, existingTerms);
    const totalLessonsToAdd = nextTermList.reduce(
      (acc, term) => acc + (term.term.courses?.length || 0),
      0,
    );
    const allitemIds = nextTermList.flatMap(
      (term) => term.term.courses?.map((course) => course.itemId) || [],
    );

    const duplicateIds = findDuplicates(allitemIds);
    console.log('Duplicate lesson IDs in source data:', duplicateIds);

    const missingIds = allitemIds.filter(
      (itemId) =>
        !existingAllLessons.find(
          (lesson) => lesson.id?.toLowerCase() === itemId.toLowerCase(),
        ),
    );
    console.log('Missing lesson IDs to add:', missingIds);

    console.log('Total lessons to add:', totalLessonsToAdd);

    for (const nextTerm of nextTermList) {
      const composedTermID = `${nextTerm.term.startYear}${nextTerm.term.startMonth}`;
      // console.log('Processing term ID:', composedTermID);
      // continue;
      // updateTermUUID(client, parseInt(composedTermID));
      for (const nextLesson of nextTerm.term.courses) {
        const foundLesson = existingAllLessons?.find(
          (item) => item.id?.toLowerCase() === nextLesson.itemId.toLowerCase(),
        );
        const isAdded = addedIds.find((item) => item == nextLesson.itemId);

        const matchedCourseId = existingCourses.find(
          (item) => item.title === nextLesson.title,
        )?.id;

        if (!matchedCourseId) {
          console.log(
            `Cannot find the course ID for course ${nextLesson.title}:`,
          );
        }

        // continue;
        if (!foundLesson && !isAdded) {
          // Add lesson
          const toBeAdded = {
            id: nextLesson.itemId,
            course_id: matchedCourseId,
            title: nextLesson.title,
            subtitle: nextLesson.subtitle || '',
            content: nextLesson.description || '',
          };
          console.log(
            `Adding lesson: ${toBeAdded.title}, course_id: ${toBeAdded?.course_id};`,
          );
          const { data: addedCourse, error: addingError } = await client
            .from('lesson')
            .insert(toBeAdded);

          if (addingError) {
            console.error('Error adding lesson:', addingError);
            throw addingError;
          } else {
            console.log(
              `Added lesson: ${toBeAdded.title}, course_id: ${toBeAdded?.course_id};`,
            );
            // console.log('Added lesson:', addedCourse);
            addedIds.push(toBeAdded.id);
          }
        } else {
          console.log(
            `Found added lesson: ${foundLesson || isAdded}. Skipping.`,
          );
        }
      }
    }

    expect(1).toBe(1);
  });

  test('Migrate files data', async () => {
    return;
    let addedFileLinks: string[] = [];
    const nextAllCourses = await readMigrationData();
    const client = (await signinClient()).client;
    const existingAllFiles = await getAllFIles();
    console.log('Existing files count:', existingAllFiles?.length);

    // If files is absent, add it
    const nextTermList = nextAllCourses.terms;
    console.log('nextTermList:', nextTermList?.length);
    const existingCourses = await getAllCourses();
    const allNextFiles = nextTermList
      .flatMap(
        (term) =>
          term.term.courses?.map((course) =>
            course?.files?.map((file) => {
              return {
                ...file,
                courseTitle: course.title,
                lessonId: course.itemId,
              };
            }),
          ) || [],
      )
      .flat()
      .filter((file) => file);
    const allNextFileItemLinks = nextTermList
      .flatMap(
        (term) =>
          term.term.courses?.map((course) =>
            course?.files?.map((file) => file.doc),
          ) || [],
      )
      .flat()
      .filter((link) => link);
    const totalFilesToAdd = allNextFileItemLinks.length;

    const duplicateIds = findDuplicates(allNextFileItemLinks);
    console.log('Duplicate file in source data:', duplicateIds);

    const missingFileLinks = allNextFileItemLinks.filter(
      (itemLink) => !existingAllFiles.find((file) => file.link === itemLink),
    );
    console.log('Missing file IDs to add:', missingFileLinks);

    console.log('Total files to add:', totalFilesToAdd);
    // return;

    for (const nextFile of allNextFiles) {
      const foundExistingFile = existingAllFiles?.find(
        (item) => item.link?.toLowerCase() === nextFile.doc.toLowerCase(),
      );
      if (!foundExistingFile && !addedFileLinks.includes(nextFile.doc)) {
        const matchedCourseTitle = existingCourses.find(
          (item) => item.title === nextFile.courseTitle,
        )?.id;

        if (!matchedCourseTitle) {
          console.log(
            `Cannot find the course ID for file ${nextFile.title} of course ${nextFile.courseTitle}:`,
          );
          continue;
        }

        // Add file
        const toBeAdded = {
          title: nextFile.title,
          link: nextFile.doc,
          file_type: 'document',
          lesson_id: nextFile.lessonId,
        };
        console.log(
          `Adding file: ${toBeAdded.title}, lesson_id: ${toBeAdded?.lesson_id};`,
        );
        const { data: addedFile, error: addingError } = await client
          .from('file_document')
          .insert(toBeAdded);

        if (addingError) {
          console.error('Error adding file:', addingError);
          throw addingError;
        } else {
          console.log(
            `Added file: ${toBeAdded.title}, lesson_id: ${toBeAdded?.lesson_id};`,
          );
          // console.log('Added file:', addedFile);
          addedFileLinks.push(toBeAdded.link);
        }
      } else {
        console.log(`Found added file: ${foundExistingFile}. Skipping.`);
      }
    }

    expect(1).toBe(1);
  });

  test('Add all videos', async () => {
    return;
    const nextAllCourses = await readMigrationData();
    const nextTermList = nextAllCourses.terms;
    console.log('nextTermList:', nextTermList?.length);

    const allNextVideos = nextTermList
      .flatMap((term) =>
        term.term.courses?.map((course) => {
          const videoList = course?.video;
          if (!videoList || videoList.length === 0) {
            return null;
          }
          console.log(`Videos found for course ${course.title}:`, videoList);
          console.log(`Type: ${typeof videoList}`);
          if (typeof videoList === 'string') {
            return [
              {
                link: videoList,
                title: course.title,
                lesson_id: course.itemId,
                file_type: 'video',
              },
            ];
          }
          return videoList.map((item) => {
            return {
              link: item,
              title: course.title,
              lesson_id: course.itemId,
              file_type: 'video',
            };
          });
        }),
      )
      .flat()
      .filter((video) => video);
    console.log('All videos to migrate:', allNextVideos.length);

    for (const nextVideo of allNextVideos) {
      // Add video
      console.log(
        `Adding video: ${nextVideo.title}, lesson_id: ${nextVideo?.lesson_id};`,
      );
      // Here you would add the logic to insert the video into the database
      const toBeAdded = nextVideo;
      const client = (await signinClient()).client;
      const existingAllFiles = await getAllFIles();

      const foundExistingFile = existingAllFiles?.find(
        (item) => item.link?.toLowerCase() === nextVideo.link.toLowerCase(),
      );
      let addedFileLinks: string[] = [];
      if (!foundExistingFile && !addedFileLinks.includes(nextVideo.link)) {
        console.log(`Adding video: ${toBeAdded.title}, lesson_id: ${toBeAdded?.lesson_id};`);
        const { data: addedFile, error: addingError } = await client
          .from('file_document')
          .insert(toBeAdded);

        if (addingError) {
          console.error('Error adding file:', addingError);
          throw addingError;
        } else {
          console.log(
            `Added file: ${toBeAdded.title}, lesson_id: ${toBeAdded?.lesson_id};`,
          );
          // console.log('Added file:', addedFile);
          addedFileLinks.push(toBeAdded.link);
        }
      } else {
        console.log(`Found added file: ${foundExistingFile}. Skipping.`);
      }
    } 

    expect(1).toBe(1);
  });
});
