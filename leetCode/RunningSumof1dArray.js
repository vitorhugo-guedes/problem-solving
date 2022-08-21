let numbers = [1, 1, 1, 1, 1];

var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }
  return nums;
};

console.log(runningSum(numbers));
