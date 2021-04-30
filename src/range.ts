export function range(start: number, end?: number, step = 1): number[] {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  const result = [];
  for (let i = start; i < end; i += step) result.push(i);
  return result;
}
