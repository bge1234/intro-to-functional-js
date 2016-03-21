var arr = [1, 2, 3, 4];

function filter(arr, cb) {
  var output = [];

  for (var i = 0; i < arr.length; i++) {
    if(cb(arr[i], i, arr))
      output.push(arr[i]);
  }

  return output;
}

var newArr = filter(arr, function (num, i, arr) {
  return num % 2 === 0;
});

console.log(newArr); // [2, 4]
