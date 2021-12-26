function getCircularReplacer() {
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
}

// stringfy the object
export function inspect(obj) {
  if (typeof obj === 'string') {
    return obj;
  }
  return obj && JSON.stringify(obj, getCircularReplacer());
}
