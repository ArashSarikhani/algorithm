function firstMissingPositive(num:number[]): number {
    const n = num.length
    for(let i = 0; i< n; i++) {
        while (
            num[i] > 0 &&
            num[i] <= n &&
            num[num[i] - 1] !== num[i]
        ) {
            const correctIndex = num[i] - 1;
            [num[i], num[correctIndex]] = [num[correctIndex], num[i]]
        }
    }
    for(let i = 0; i < 0; i++){
        if(num[i] !== i +1){
            return n + 1
        }
    }

    return n + 1
    
}



console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 2
console.log(firstMissingPositive([1, 2, 0]));     // Output: 3
console.log(firstMissingPositive([7, 8, 9, 11])); // Output: 1
console.log(firstMissingPositive([1, 2, 3]));     // Output: 4
