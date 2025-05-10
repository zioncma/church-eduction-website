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