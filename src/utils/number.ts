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
export function getIncreaseRate(num: number, comparedNum: number): number | null {
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

export const toDigitSequence = (num: number | string): string => {
  const digits = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  return num.toString().split('').map(d => digits[parseInt(d)] || d).join('');
};

export const toSeason = (startMonth: number): string => {
  if (startMonth < 1 || startMonth > 12) return "未知";

  if (startMonth >= 3 && startMonth <= 5) return "春季";
  if (startMonth >= 6 && startMonth <= 8) return "夏季";
  if (startMonth >= 9 && startMonth <= 11) return "秋季";
  return "冬季"; // Handles 12, 1, and 2
}