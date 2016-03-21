var arr = [1, 2, 3, 4];

function filter(arr, cb) {

}

var newArr = filter(arr, function (num, i, arr) {
  return num % 2 === 0;
});

console.log(newArr);
