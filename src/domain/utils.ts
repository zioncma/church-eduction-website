import _ from 'lodash';
import { Term } from '../features/supabase/types';

const TERM_THRESHOLD_DAYS = 7;

/**
 * Returns non-overlapping UTC date bounds for a term, shifted earlier so
 * news near the end of one term is classified into the upcoming term.
 */
export function getTermDateRange(term: Term, thresholdDays: number = TERM_THRESHOLD_DAYS) {
  const startDate = new Date(Date.UTC(term.start_year, term.start_month - 1, 1));
  startDate.setUTCDate(startDate.getUTCDate() - thresholdDays);
  const start = startDate.getTime();

  const endDate = new Date(Date.UTC(term.end_year, term.end_month, 1));
  endDate.setUTCDate(endDate.getUTCDate() - thresholdDays);
  const end = endDate.getTime();
  return { start, end };
}

export function sortByStartDate(data) {
  return _.sortBy(data, (item) => item.start_year * 12 + item.start_month).reverse()
}
