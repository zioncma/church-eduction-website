import axios from 'axios';

const coursesUrl = 'https://api.npoint.io/1e93a3d1bb2b444ea95c';
const growthsUrl = 'https://api.npoint.io/1b9736c9483958c59206';
const newsUrl = 'https://api.npoint.io/b4b907997cc8ec0f1809';

// para: url, return the item data
// read data from data source corresponding to the url and id
export async function loadItemData(url, id) {
  let items = [];
  if (url.includes("course")) {
    const courses = await readCourses();
    items = courses.reduce( (acc, currentObj) => acc.concat(currentObj.term.courses), items);
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

