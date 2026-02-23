import { getAllNews, getNewsByTerm, getAllCourses } from '../features/supabase';
import useSWR from 'swr';
import _ from 'lodash';
import { useCourseById, useLessonById, useFilesByLesson } from './courses';
import { sortByStartDate } from '.';

export function useNews(termId: string | undefined) {
  console.debug("useNews: ", termId);
  if (termId === undefined) {
    const allNews = useSWR('news', getAllNews);
    const sorted = allNews.data
      ? [...allNews.data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      : undefined;
    return {
      newsData: sorted, 
      newsError: allNews.error, 
      isLoading: !allNews.error && !allNews.data,
    };
  }

  const result = useSWR(termId ? `news:${termId}` : null, () =>
    getNewsByTerm(termId)
  );
  const sorted = result.data
    ? [...result.data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    : undefined;

  return {
    newsData: sorted, 
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


export function useItemPageData(lessonId: string | undefined, courseId: string | undefined) {
  const {lesson, error: lessonError, isLoading: isLoadingLesson} = useLessonById(lessonId);
  const {course, error: courseError, isLoading: isLoadingCourse} = useCourseById(courseId);
  const {files, error: filesError, isLoading: isLoadingFiles} = useFilesByLesson(lessonId);

  return { lesson, course, files, error: lessonError || courseError || filesError, isLoading: isLoadingLesson || isLoadingCourse || isLoadingFiles };
}