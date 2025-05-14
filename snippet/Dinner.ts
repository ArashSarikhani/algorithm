function solution(A: number[], B: number[]): number {
  const N = A.length;

  for (let k = 0; k < N; k++) {
    const rotatedDish = B.slice(N - k).concat(B.slice(0, N - k));
    let valid = true;

    for (let i = 0; i < N; i++) {
      if (A[i] === rotatedDish[i]) {
        valid = false;
        break;
      }
    }

    if (valid) {
      return k;
    }
  }

  return -1;
}