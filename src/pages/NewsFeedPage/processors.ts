// import { group } from "console";

type TermNews = {
  name: string;
  news: any[];
};

/**
 *
 */
export function getTermSet(newsList: TermNews[]): Set<string | unknown> {
  // get a set of existing terms in the data, e.g. [2010, 2011, 2012]
  const set = new Set();

  if (!newsList?.length) {
    return set;
  }

  newsList?.forEach((group) => {
    // group.news.forEach((news) => set.add(news.term));
    set.add(group.name);
  });
  return set;
  // return newsList.groups.map((group) => group.name);
}

export function getGroupNames(newsList) {
  if (newsList.groups === undefined) {
    return [];
  }
  return newsList.map((group) => group.name);
}

export function filterByTerm(newsList: TermNews[], term) {
  // get the news list for a specific term, return all news list if term is false
  let result = newsList;

  if (!newsList?.length) {
    return newsList;
  }

  const reducer = (accumulator, current) => accumulator.concat(current.news);

  if (term) {
    result = newsList.filter((item) => item.name === term).reduce(reducer, []);
  } else {
    // push all groups into one array
    return newsList.reduce(reducer, []);
  }
  return result;
}
