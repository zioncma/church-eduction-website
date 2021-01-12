//para: url, return the item data
export default async function loadData(url, id) {
  let items = [];
  if (url.includes("course")) {
    // import module for side effects
    const { data } = await import("../../data/courses");
    items = data.reduce( (acc, currentObj) => acc.concat(currentObj.term.courses), items);
  } else if (url.includes("growth")) {
    const { growths } = await import("../../data/growths");
    items = growths;
  }

  // const i = url.lastIndexOf('/');
  // const itemId = url.slice(i+1);
  const item = items.find(({ itemId }) => itemId === id);
  return item;
}