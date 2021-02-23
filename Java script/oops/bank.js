class bank {
    constructor(acno, name, minbal) {
        this.acno = acno;
        this.name = name;
        this.minbal = minbal;
    }
    deposit(amount)

    {
        this.minbal += amount;
        console.log("account credited with" + amount + "avl balance" + this.bal);
    }
    withdraw(amount) {
        if (amount > this.bal) {
            console.log("insufficient balance");
        } else {
            this.minbal -= amount;
            console.log("account credited with" + amount + "avl balance" + this.bal);
        }
    }
    balanceenq() {
        console.log(this.minbal);
    }
}
var obj1 = new bank(1002, "bibin", 5000);
obj1.deposit(500);
obj1.withdraw(550);
obj1.balanceenq();