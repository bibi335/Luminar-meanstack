class Person extends {
    setPerson(age, name) {
        this.age = age;
        this.name = name;
    }
    printPerson {
        console.log(this.age);
        console.log(this.name);

    }
}
var ob1 = new person()
ob1.setPerson("Bibin", 23);