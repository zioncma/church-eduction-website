/**
 * @description trim all the string type properties of an object
 * @param  {T} obj
 * @returns T
 */
 export function trimObjectProperties<T>(obj: T): T {
  let result = {} as T;
  Object.assign(result, obj);
  Object.keys(obj).map((k) => {
    return (result[k] = typeof obj[k] === 'string' ? obj[k].trim() : obj[k]);
  });

  return result;
}


export function replaceEmptyStringWithNull<T>(obj: T): T {
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    if (result[key] === '') {
      result[key] = null;
    }
  });
  return result;
}

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

/**
 * print object as a string
 */
export function inspect(obj: object): string {
  //stringify a circular structure in a JSON-like format
  return JSON.stringify(obj, getCircularReplacer());
}

/**
 * extract keys from object, except some keys
 */
export function getKeysExcept(data: object, except: string[]): string[] {
  if (!data) {
    return null;
  }

  return Object.keys(data).filter(
    (key) => !except.includes(key)
  );
}