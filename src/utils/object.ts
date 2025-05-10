
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
    return [];
  }

  return Object.keys(data).filter(
    (key) => !except.includes(key)
  );
}