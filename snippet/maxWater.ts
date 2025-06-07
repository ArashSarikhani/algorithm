function maxWater(height:number[]) :  number {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const heightLeft = height[left];
        const heightRight = height[right];
        const area = Math.min(heightLeft, heightRight) * (right - left);
        maxArea = Math.max(maxArea, area);

        // Move the pointer that is at the shorter line
        if (heightLeft < heightRight) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea
}