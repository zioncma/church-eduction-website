/**
 * String Manipulations
 */


/**
 * conver the first letter to uppercase
 */
export function capitalizeFirstLetter(string: string) {
  return string && (string.charAt(0).toUpperCase() + string.slice(1));
}

export function padZeroTo2Digits(num: number) {
  return String(num).padStart(2, '0');
}

/**
 * return true if it is a string and contains valid characters
 */
export function hasValidChar(input) {
  if (typeof input !== 'string') {
    return false;
  }

  return input.trim().length > 0;
}