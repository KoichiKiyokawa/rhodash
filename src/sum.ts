export function sum(numbers: number[]): number {
  let result = 0;
  for (const num of numbers) result += num;
  return result;
}
