import { getCourseById } from './../features/supabase/controllers';
import {
  getAllCourses,
  getLessonsByCourse,
  getLessonById,
  getFilesByLesson,
} from '../features/supabase';
import useSWR from 'swr';
import _ from 'lodash';
import { isFilledArray } from '../utils';

/**
 *
 */
export function useAllCourses() {
  const { data, error } = useSWR('allCourses', getAllCourses);
  return { courses: data, error, isLoading: !error && !data };
  // return useSWR("allCourses", getAllCourses);
}

export function useCourseById(courseId: string | undefined) {
  const result = useSWR(courseId ? `course:${courseId}` : null, () =>
    getCourseById(courseId || "")
  );

  if (!courseId) {
    return {
      course: undefined,
      error: new Error('Missing course ID'),
      isLoading: false,
    };
  }

  return {
    course: result.data,
    error: result.error,
    isLoading: !result.error && !result.data,
  };
}


export const LESSONS_KEY = 'lessons';
export function useLessonsByCourse(courseId: string | undefined) {
  const result = useSWR(courseId ? `${LESSONS_KEY}:${courseId}` : null, () =>
    getLessonsByCourse(courseId || "")
  );

  if (!courseId) {
    return {
      lessons: undefined,
      error: new Error('Missing course ID'),
      isLoading: false,
    };
  }

  return {
    lessons: result.data,
    error: result.error,
    isLoading: !result.error && !result.data,
  };
}

export function useLessonById(lessonId: string | undefined) {
  const result = useSWR(lessonId ? `lesson:${lessonId}` : null, () =>
    getLessonById(lessonId || "")
  );

  if (!lessonId) {
    return {
      lesson: undefined,
      error: new Error('Missing lesson ID'),
      isLoading: false,
    };
  }

  return {
    lesson: result.data,
    error: result.error,
    isLoading: !result.error && !result.data,
  };
}

export function useFilesByLesson(lessonId: string | undefined) {
  const result = useSWR(lessonId ? `files:${lessonId}` : null, () =>
    getFilesByLesson(lessonId || "")
  );

  if (!lessonId) {
    return {
      files: undefined,
      error: new Error('Missing lesson ID'),
      isLoading: false,
    };
  }

  return {
    files: result.data,
    error: result.error,
    isLoading: !result.error && !result.data,
  };
}


/**
 *
 * @param {*} cardList
 * @returns a map {title: courses[]} for all term, so we can sort courses by the term
 */
export function generateTitleToCoursesMap(cardList) {
  let titleMapObject = new Map();
  if (!isFilledArray(cardList)) {
    return titleMapObject;
  }

  const terms = cardList.map((data) => data.term);
  for (const term of terms) {
    let courseList = term.courses;
    let preCourseTitle = courseList[0].title;
    let courseSerie: Array<{ title: string; [key: string]: any }> = []; // all classes in the same title
    for (const course of courseList) {
      if (course.title === preCourseTitle) {
        // add this course to courseSerie
        courseSerie.push(course);
      } else {
        // put courseSerie in the map
        titleMapObject.set(course.title, courseSerie);
        courseSerie = [];
        preCourseTitle = course.title;
      }
      titleMapObject.set(course.title, courseSerie);
    }
  }
  return titleMapObject;
}
