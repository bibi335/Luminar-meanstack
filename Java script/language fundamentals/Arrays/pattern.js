var arr = [3, 4, 5];
var total = 0;
for (let num of arr) {
    total += num
}
var res = [];
for (let num of arr) {
    res.push(total - num)
}
console.log(res)