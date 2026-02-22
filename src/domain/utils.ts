import _ from 'lodash';

export function sortByStartDate(data) {
  return _.sortBy(data, (item) => item.start_year * 12 + item.start_month).reverse()
}