
// return from db
var arr = ['this is the first element'];

console.log(arr.length);

for(var i = 0; i < arr.length; i++) {
    console.log(i, ' : ' , arr[i]);
}

var iterable = [1,2,3];

for (var x of iterable) {
    console.log(x);
}
