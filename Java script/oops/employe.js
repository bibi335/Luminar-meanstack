class employees {
    constructor(id, name, desig, sal) {
        this.id = id;
        this.name = name;
        this.desig = desig;
        this.sal = sal;
    }
}
var obj = new employees(100, "bibin", "developer", 25000);
var obj1 = new employees(101, "binu", "developer", 25000);
var obj2 = new employees(102, "biju", "qa", 26000);
var obj3 = new employees(103, "biny", "developer", 25500);
var employee = [];
employee.push(obj);
employee.push(obj1);
employee.push(obj2);
employee.push(obj3);
//ename = employee.map(emp => emp.name.toUpperCase())
//console.log(ename);
var dev = employee.filter(emp => emp.desig == "developer").forEach(o => console.log(o.name))
employee.sort((emp1, emp2) => emp1.sal > emp2.sal ? -1 : 1).forEach(emp => console.log(emp))