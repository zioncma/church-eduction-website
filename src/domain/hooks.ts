import { getAllNews, getNewsByTerm, getAllCourses } from '../features/supabase';
import useSWR from 'swr';
import _ from 'lodash';
import { useCourseById, useLessonById } from './courses';

export function useNews(termId: number | undefined) {
  if (termId === undefined) {
    return useSWR('news', getAllNews);
  }

  const result = useSWR(termId ? `news:${termId}` : null, () =>
    getNewsByTerm(termId)
  );
  return result;
}


/**
 *
 */
export function useAllCourses() {
  const { data, error } = useSWR('allCourses', getAllCourses);
  return { courses: data, error, isLoading: !error && !data };
  // return useSWR("allCourses", getAllCourses);
}


export function useItemPageData(lessonId: number | undefined, courseId: number | undefined) {
  const {lesson, error: lessonError, isLoading: isLoadingLesson} = useLessonById(lessonId);
  const {course, error: courseError, isLoading: isLoadingCourse} = useCourseById(courseId);

  return { lesson, course, error: lessonError || courseError, isLoading: isLoadingLesson || isLoadingCourse };
}