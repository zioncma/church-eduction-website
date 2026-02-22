import useSWR from 'swr';
import { readCourses, coursesUrl, readNews, newsUrl, loadItemData} from './loadData';

/**
 * 
 */
export function useCoursesData() {
  const { data, error } = useSWR(coursesUrl, readCourses);
  return { courses: data, error, isLoading: !error && !data };
}

export function useNewsList() {
  const { data, error } = useSWR(newsUrl, readNews);
  return { newsList: data, error, isLoading: !error && !data };
}

export function useGrowthList() {
  //  const { data, error } = useSWR(growthsUrl, readGrowths);
    return { growthData: {}, error: null, isLoading: false };  
}

export function useItemData(url, id) {
  const { data, error } = useSWR(id, () => loadItemData(url, id));
  return { courseItem: data, error, isLoading: !error && !data };
}