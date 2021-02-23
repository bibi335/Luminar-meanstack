var num = 20;
let flag = 0;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {

        flag = 1;
        break;
    }
}
if (flag == 1) {
    console.log(num, "Number is not a prime");
} else {
    console.log(num, "number is prime");
}