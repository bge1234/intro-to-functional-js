var arr = [1, 2, 3, 4];

function map(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

var newArray = map(arr, function (num, i, arr) {
  return num * 2;
});

console.log(newArray);
