import { useAllCourses, useTerms } from '../domain';


export function useGrowthList() {}

export function useItemData(url, id) {}

/**
 * 
 * @returns get all courses and 
 */
export function useEducationPageData() {
  const {terms, error: termsError, isLoading: isLoadingTerms } = useTerms();
  const { courses, error: allCoursesError, isLoading: isLoadingAllCourses } = useAllCourses();

  return {
    courses,
    terms,
    error: allCoursesError || termsError,
    isLoading: isLoadingAllCourses || isLoadingTerms,
  };
}
