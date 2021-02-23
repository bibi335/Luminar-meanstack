var num = 4;
var ll = 8;
var ul = 25;
for (let i = 1; i <= ul; i++) {
    res = i ** num;
    if ((res >= ll) & (res <= ul)) {
        console.log(res);
    }
}