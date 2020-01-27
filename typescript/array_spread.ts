var arr1 = ['a','s','d','f','g'];
var arr2 = [1,2,3,4,5];

console.log(arr1);
console.log(...arr1);   //Element by element
// var ['e'] = [x,y, ...remaining];
// console.log([arr1[0], ...remaining]);
var arr3 = [...arr1, ...arr2];
console.log(arr3);


