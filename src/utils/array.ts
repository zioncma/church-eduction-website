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
 * @param prop the property name
 */
export function merge2ArraysOfObject(
  arr1: Array<any>,
  arr2: Array<any>,
  prop: string
): any[] {
  // no need to merge if one of the arrays has no elements
  if (!isFilledArray(arr1) || !isFilledArray(arr2)) {
    return null;
  }

  const result = arr1.map((item) => {
    const index = arr2.findIndex((item2) => item2[prop] === item[prop]);
    if (index >= 0) {
      return { ...item, ...arr2[index] };
    } else {
      return item;
    }
  });

  return result;
}

/**
 * 
 */
export function getAverage(arr: number[]): number {
  const sum = arr.reduce((a, b) => a + b, 0);
  const ave = (sum / arr.length) || 0;
  return ave;
}

export function getAverageByProp(arr: any[], prop: string): number {
  if (!isFilledArray(arr)) {
    return null;
  }

  const sum = arr?.reduce((acc, item) => acc + item[prop], 0) || 0;
  const length = arr?.length;
  const ave = sum / length;
  return ave;
}

export function getArray(args: any) {
  if (Array.isArray(args) || !args) {
    return args;
  }
  return [args];
}