const arr = [1, 7, 3, 6, 5, 6];

function pivotIndex(nums) {
  let leftSum = 0;

  let total = nums.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  for (let i = 0; i < nums.length; i++) {
    let rightSum = total - nums[i] - leftSum;

    if (leftSum == rightSum) {
      return i;
    }

    leftSum += nums[i];
  }
  return -1;
}

console.log(pivotIndex(arr));
