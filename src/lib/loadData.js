import axios from 'axios';

const baseAPI = 'https://api.npoint.io/';
export const coursesUrl = `${baseAPI}1e93a3d1bb2b444ea95c`;
export const growthsUrl = `${baseAPI}1b9736c9483958c59206`;
export const newsUrl = `${baseAPI}214e8298279ed3cbc3e1`;

// para: url, return the item data
// read data from data source corresponding to the url and id
export async function loadItemData(url, id) {
  let items = [];
  if (url.includes("course")) {
    const courses = await readCourses();
    items = courses.terms.reduce( (acc, currentObj) => acc.concat(currentObj.term.courses), items);
  } else if (url.includes("growth")) {
    const growths = await readGrowths();
    items = growths;
  }

  const item = items.find(({ itemId }) => itemId === id);
  return item;
}

export async function readCourses() {
  const res = await axios.get(coursesUrl);
  const data = res.data;
  return data;
}

export async function readGrowths() {
  const res = await axios.get(growthsUrl);
  const data = res.data.data;
  return data;
}

// return a list of grouped news items
export async function readNews() {
  const res = await axios.get(newsUrl);
  const groups = res.data.groups;
  return groups;
}

export async function fetchGet(url) {
  const config = {
    method: 'get',
    url: url,
    headers: { 'Access-Control-Allow-Origin': '*' },
  };
  
  const res = await axios(config);
  return res;
}

