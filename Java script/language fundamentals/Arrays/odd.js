var arr = [10, 12, 13, 14];
var even = [],
    odd = [];
for (let num of arr) {
    if (num % 2 == 0) {
        even.push(num)
    } else {
        odd.push(num)
    }
}
console.log(even)
console.log(odd)