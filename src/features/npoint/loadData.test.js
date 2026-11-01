import { coursesUrl, growthsUrl, newsUrl } from './loadData';

describe('npoint data sources', () => {
  test('exports the configured endpoint URLs', () => {
    expect(coursesUrl).toMatch(/^https:\/\/api\.npoint\.io\//);
    expect(growthsUrl).toMatch(/^https:\/\/api\.npoint\.io\//);
    expect(newsUrl).toMatch(/^https:\/\/api\.npoint\.io\//);
  });
});
