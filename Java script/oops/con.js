class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printPerson() {
        console.log(this.name);
        console.log(this.age);
    }
}
var obj = new Person("bibin", 23);
console.log(obj.name);
console.log(obj.age);