class Math {
    add(num1) {
        console.log("inside single epram method");

    }
    add(num1, num2) {
        console.log("inside 2 arg method");

    }
    add(num1, num2, num3) {
        console.log("inside 3 args method");

    }
}
var mat = new math()
mat.add(10);
mat.add(10, 20);
mat.add(10, 20, 30);