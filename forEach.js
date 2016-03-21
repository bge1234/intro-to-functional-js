var arr = [1, 2, 3, 4];

function forEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

forEach(arr, function(num, i, arr) {
  console.log(arr);
});
