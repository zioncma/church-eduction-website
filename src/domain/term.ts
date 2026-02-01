import { getAllTerms } from '../features/supabase';
import useSWR from 'swr';
import _ from 'lodash';
import { sortByStartDate } from './utils';
import { Term } from '../features/supabase/types';

/**
 * sorted by name
 * @returns
 */
export function useTerms() {
  const { data, error } = useSWR('terms', getAllTerms);
  return {
    terms: sortByStartDate(data || [] as Term[]),
    error,
    isLoading: !error && !data,
  };
}

export function findTerm(targetTermStartYear, targetTermStartMonth, existingTerms: Term[]) {
  const found = existingTerms.find(item => item.start_year === targetTermStartYear && item.start_month === targetTermStartMonth)
  return found
}
