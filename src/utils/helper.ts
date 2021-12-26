import axios from 'axios';

/**
 * @description ### Returns Go / Lua like responses(data, err)
 * when used with await
 *
 * - Example response [ data, undefined ]
 * - Example response [ undefined, Error ]
 *
 *
 * When used with Promise.all([req1, req2, req3])
 * - Example response [ [data1, data2, data3], undefined ]
 * - Example response [ undefined, Error ]
 *
 *
 * When used with Promise.race([req1, req2, req3])
 * - Example response [ data, undefined ]
 * - Example response [ undefined, Error ]
 *
 * @param {Promise} promise
 * @returns {Promise} [ data, undefined ]
 * @returns {Promise} [ undefined, Error ]
 */

export function handle(promise) {
  return promise
    .then((data) => [data, undefined])
    .catch((error) => Promise.resolve([undefined, error]));
}

export async function waitTimeout(time) {
  return await setTimeout(() => console.log(`waiting ${time}`), time);
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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

export function inspect(obj) {
  return JSON.stringify(obj, getCircularReplacer());
}

export function createAxiosTokenConfig(
  token: string | undefined
): object | undefined {
  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }
  return;
}

export function swrFetcher(url, accessToken?: string) {
  if (accessToken) {
    return axios
      .get(url, createAxiosTokenConfig(accessToken))
      .then((res) => res?.data);
  }
  return axios.get(url).then((res) => res?.data);
}

/**
 * @description return if the array has at least one not-null-nor-empty-array element
 * @param  {any} obj
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

export function makeID(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function promiseWithTimeout<T>(
  promise: Promise<T>,
  ms: number = 5000,
  timeoutError = new Error('Promise timed out')
): Promise<T> {
  // create a promise that rejects in milliseconds
  const timeout = new Promise<never>((_, reject) => {
    setTimeout(() => {
      reject(timeoutError);
    }, ms);
  });

  // returns a race between timeout and the passed promise
  return Promise.race<T>([promise, timeout]);
}