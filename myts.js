var Employee = /** @class */ (function () {
    function Employee(Name, Salary) {
        this.empName = "";
        this.empSalary = 0;
        this.empName = Name;
        this.empSalary = Salary;
    }
    Employee.prototype.Display = function () {
        console.log(this.empName + " " + this.empSalary);
    };
    return Employee;
}());
var emp = new Employee("Bill", 20000);
emp.Display();
