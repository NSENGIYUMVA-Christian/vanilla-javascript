const nums = [2, -2, 3, -3, 4, 10, 5];

const squareNum = (arr) => {
  var pos = arr.filter((item) => item > 0);
  console.log("before", pos);
  var squaredNumbers = pos.map((item) => item * item);
  return "after", squaredNumbers;
};

console.log(squareNum(nums));
