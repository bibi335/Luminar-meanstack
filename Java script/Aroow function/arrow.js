//var sub = (num1, num2) => num1 - num2
//var cube = (num1) => num1 ** 30
//sub(20, 15)
//cube(4)
//map
var arr = [2, 4, 6, 8, 9, 11]
var data = arr.map(num1 => num1 ** 2)
console.log(data);
//filter 
var data1 = arr.filter(num => num % 2 == 0);
console.log(data1);
var sum = arr.reduce((num1, num2) => num1 + num2)
console.log(sum);
var max = arr.reduce((num1, num2) => num > num2 ? num1 : num2);
console.log(max);
arr.sort((o1, o2) => o1 > o2 ? -1 : 1).forEach(o => consolelog(o));