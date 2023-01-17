var Emp = /** @class */ (function () {
    function Emp(Name, Sal) {
        this.eName = " ";
        this.esal = 0;
        this.eName = Name;
        this.esal = Sal;
    }
    Emp.prototype.display = function () {
        console.log(this.eName + " " + this.esal);
    };
    return Emp;
}());
var em = new Emp("Bill", 20000);
em.display();
