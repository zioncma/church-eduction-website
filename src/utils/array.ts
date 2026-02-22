/**
 * @description return if the array has at least one not-null-nor-empty-array element
 */
export function isFilledArray(obj: any) {
  return (
    obj &&
    Array.isArray(obj) &&
    obj.flat().length > 0 &&
    obj.flat()[0] !== null &&
    obj.flat()[0] !== undefined
  );
}

/**
 * 
 */
export function getAverage(arr: number[]): number {
  const sum = arr.reduce((a, b) => a + b, 0);
  const ave = (sum / arr.length) || 0;
  return ave;
}

export function getArray(args: any) {
  if (Array.isArray(args) || !args) {
    return args;
  }
  return [args];
}

export const findDuplicates = (arr: any[]) => {
  let sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
  // JS by default uses a crappy string compare.
  // (we use slice to clone the array so the
  // original array won't be modified)
  let results: any[] = [];
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
}
