class parent

{
    phone() {
        console.log("have a  okia phone")
    }
}
class child extends parent {
    phone() {
        super.phone();
        console.log("have a iphone")
    }
}
var obj = new child();
obj.phone();