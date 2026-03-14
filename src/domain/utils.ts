import _ from 'lodash';
import { Term } from '../features/supabase/types';

const TERM_THRESHOLD_DAYS = 7;

/**
 * Computes the effective start and end timestamps for a term.
 * Both start and end dates are shifted earlier by `thresholdDays` so that
 * news items near the end of a term are exclusively classified into the next term.
 * Shifting both dates keeps the ranges non-overlapping.
 *
 * Example with 7-day threshold:
 *   Winter (Jan–Mar): Dec 25 → Mar 25
 *   Spring (Apr–Jun): Mar 25 → Jun 24
 *   A news item dated Mar 31 falls into Spring, not Winter.
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