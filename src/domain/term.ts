import { getAllTerms } from '../features/supabase';
import useSWR from 'swr';
import _ from 'lodash';


/**
 * sorted by name
 * @returns
 */
export function useTerms() {
  const { data, error } = useSWR('terms', getAllTerms);
  return {
    terms: _.sortBy(data, (item) => item.start_year * 12 + item.start_month),
    error,
    isLoading: !error && !data,
  };
}