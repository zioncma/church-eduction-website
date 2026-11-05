import { getTermDateRange } from './utils';
import { Term } from '../features/supabase/types';

describe('getTermDateRange', () => {
  const winter: Term = {
    name: 'Winter 2026',
    start_year: 2026,
    start_month: 1,
    end_year: 2026,
    end_month: 3,
  };
  const spring: Term = {
    name: 'Spring 2026',
    start_year: 2026,
    start_month: 4,
    end_year: 2026,
    end_month: 6,
  };

  it('classifies news on March 31 into Spring rather than Winter', () => {
    const newsDate = new Date('2026-03-31').getTime();
    const winterRange = getTermDateRange(winter);
    const springRange = getTermDateRange(spring);

    expect(newsDate >= winterRange.start && newsDate < winterRange.end).toBe(false);
    expect(newsDate >= springRange.start && newsDate < springRange.end).toBe(true);
  });

  it('uses the original term ranges when the threshold is zero', () => {
    const { start, end } = getTermDateRange(winter, 0);

    expect(start).toBe(new Date(Date.UTC(2026, 0, 1)).getTime());
    expect(end).toBe(new Date(Date.UTC(2026, 3, 1)).getTime());
  });
});
