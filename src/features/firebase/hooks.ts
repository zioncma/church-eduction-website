import useSWR from 'swr';
import {fetchCourses} from './apis';


export function useCourseList() {
  const { data, error } = useSWR('firebaseCourses', fetchCourses);
  return {data, error, isLoading: !data && !error};
}