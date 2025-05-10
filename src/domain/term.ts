import { getAllTerms } from '../features/supabase';
import useSWR from 'swr';
import _ from 'lodash';
import { sortByStartDate } from './utils';

/**
 * sorted by name
 * @returns
 */
export function useTerms() {
  const { data, error } = useSWR('terms', getAllTerms);
  return {
    terms: sortByStartDate(data?.filter(item => item.courseCount > 0)),
    error,
    isLoading: !error && !data,
  };
}