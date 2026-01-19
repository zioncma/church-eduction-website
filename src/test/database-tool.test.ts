import { promises as fs } from 'fs';
import { getSupabaseClient } from '../features/supabase/supabaseClient';
import { AuthResponse } from '@supabase/supabase-js';
import { updateCourse } from '../features/supabase/controllers';

export async function readMigrationData() {
  const file = await fs.readFile(
    process.cwd() + '/src/test/course-data-backup-20260117.json',
    'utf8',
  );
  const data = JSON.parse(file);
  // console.log("JSON data: ", data);
  return data;
}

describe('Database Tool Tests', () => {
  beforeAll(() => {});

  test('Run migrateData', async () => {
    const nextAllCourses = await readMigrationData();
    const client = getSupabaseClient();
    const { data: existingAllcourse, error: fetchingError } = await client
      .from('course')
      .select('*');

    console.log('Existing courses count:', existingAllcourse?.length);
    const existingTitles = existingAllcourse?.map(c => c.title);
    // console.log('Existing courses titles:', existingTitles);

    const { data, error } = await client.auth.signInWithPassword({
      email: process.env.SUPABASE_TESTING_USER || '<EMAIL>',
      password: process.env.SUPABASE_TESTING_PASSWORD || '<PASSWORD>',
    })
    console.log('Auth signInWithPassword data:', data);
    const accessToken = data.session?.access_token;

    // If course is absent, add it
    const nextTerms = nextAllCourses.terms;
    const coursesPerTerm = nextTerms.map((item: any) => item.term.courses);
    const nextCourseTitles = coursesPerTerm.map((courses: any) => courses.map((course: any) => course.title));
    // console.log('Next course titles:', nextCourseTitles);
    for (const terms of nextAllCourses) {
        const composedTermID = terms.term.startYear + terms.term.startMonth;

        for (const course of terms.courses) {
          
        }
    }
    if (existingAllcourse) {
      for (const existingCourse of existingAllcourse) {
        if (!existingCourse.uuid) {
            const res = await updateCourse(existingCourse.id, { uuid: crypto.randomUUID() }, accessToken);
            console.log(`Updated course ID ${existingCourse.id} response:`, res);
        }
      }
    }

    // const uuid = crypto.randomUUID();
    // console.log('Generated UUID:', uuid);

    expect(1).toBe(1);
  });
});
