/**
 *
 * @param x
 * @param y
 * @returns int number, e.g. (1, 10) => 10
 */
export function getPercentageInt(x: number, y: number): number {
  return Math.round((x / y) * 100);
}

/**
 *
 * @returns percentage number
 */
export function getIncreaseRate(num: number, comparedNum: number): number {
  if (!Number.isFinite(num) || !Number.isFinite(comparedNum)) {
    return null;
  }
  return ((num - comparedNum) / comparedNum) * 100;
}

/**
 *
 * @param value
 * @param min
 * @param max
 * @returns number > 0
 */
export function norm(value, min = 0, max = 1) {
  return (value - min) / (max - min);
}
