import { getTermDateRange } from './utils';
import { Term } from '../features/supabase/types';

describe('getTermDateRange', () => {
  // Winter term: Jan–Mar (start_month=1, end_month=3)
  const winterTerm: Term = {
    name: 'Winter 2026',
    start_year: 2026,
    start_month: 1,
    end_year: 2026,
    end_month: 3,
  };

  // Spring term: Apr–Jun (start_month=4, end_month=6)
  const springTerm: Term = {
    name: 'Spring 2026',
    start_year: 2026,
    start_month: 4,
    end_year: 2026,
    end_month: 6,
  };

  test('winter start is shifted back 7 days: Dec 25', () => {
    const { start } = getTermDateRange(winterTerm);
    expect(start).toBe(new Date(Date.UTC(2025, 11, 25)).getTime());
  });

  test('winter end is shifted back 7 days: Mar 25', () => {
    const { end } = getTermDateRange(winterTerm);
    expect(end).toBe(new Date(Date.UTC(2026, 2, 25)).getTime());
  });

  test('ranges are contiguous: winter end equals spring start', () => {
    const { end: winterEnd } = getTermDateRange(winterTerm);
    const { start: springStart } = getTermDateRange(springTerm);
    expect(winterEnd).toBe(springStart);
  });

  test('news dated Mar 31 falls into Spring, not Winter', () => {
    const newsDate = new Date('2026-03-31').getTime();
    const w = getTermDateRange(winterTerm);
    const s = getTermDateRange(springTerm);
    expect(newsDate >= w.start && newsDate < w.end).toBe(false);
    expect(newsDate >= s.start && newsDate < s.end).toBe(true);
  });

  test('news dated Mar 20 falls INSIDE winter term', () => {
    const { start, end } = getTermDateRange(winterTerm);
    const newsDate = new Date('2026-03-20').getTime();
    expect(newsDate >= start && newsDate < end).toBe(true);
  });

  test('news dated Jan 1 falls INSIDE winter term', () => {
    const { start, end } = getTermDateRange(winterTerm);
    const newsDate = new Date('2026-01-01').getTime();
    expect(newsDate >= start && newsDate < end).toBe(true);
  });

  test('news dated Apr 6 falls INSIDE spring term', () => {
    const { start, end } = getTermDateRange(springTerm);
    const newsDate = new Date('2026-04-06').getTime();
    expect(newsDate >= start && newsDate < end).toBe(true);
  });

  test('custom threshold of 0 uses original dates', () => {
    const { start, end } = getTermDateRange(winterTerm, 0);
    expect(start).toBe(new Date(Date.UTC(2026, 0, 1)).getTime());
    expect(end).toBe(new Date(Date.UTC(2026, 3, 1)).getTime());
  });
});
