import { getAllNews, getNewsByTerm, getAllCourses } from '../features/supabase';
import useSWR from 'swr';
import _ from 'lodash';
import { useCourseById, useLessonById } from './courses';
import { sortByStartDate } from '.';

export function useNews(termId: string | undefined) {
  console.debug("useNews: ", termId);
  if (termId === undefined) {
    const allNews = useSWR('news', getAllNews);
    return {
      newsData: sortByStartDate(allNews.data), 
      newsError: allNews.error, 
      isLoading: !allNews.error && !allNews.data,
    };
  }

  const result = useSWR(termId ? `news:${termId}` : null, () =>
    getNewsByTerm(termId)
  );

  return {
    newsData: sortByStartDate(result.data), 
    newsError: result.error, 
    isLoading: !result.error && !result.data,
  };
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