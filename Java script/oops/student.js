class students {

    constructor(rol, name, course, c_name) {


        this.rol = rol;
        this.name = name;
        this.course = course;
        this.c_name = c_name;
    }
    printStudent() {
        console.log(this.rol + "," + this.name + "," + this.course + "," + students.getcollege());

    }
    static getcollege() {
        return "luminar"
    }
}
var stud = new students(100, "ram", "BCA");

stud.printStudent();
console.log(students.getcollege());