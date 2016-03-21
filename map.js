var arr = [1, 2, 3, 4];

function map(arr, cb) {
  var output = [];

  for (var i = 0; i < arr.length; i++) {
    output.push(cb(arr[i], i, arr));
  }

  return output;
}

var newArray = map(arr, function (num, i, arr) {
  return num * 2;
});

console.log(newArray); // [2, 4, 6, 8]
