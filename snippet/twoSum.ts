function twoSum(n: number[], target: number): number[] {
  let map = new Map<number, number>();

  for (let i = 0; i < n.length; i++) {
    let complement = target - n[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(n[i], i);
  }

  return []; // optional, in case no solution is found
}
