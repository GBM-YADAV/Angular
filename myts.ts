class Employee
{
    empName:string="";
    empSalary:Number=0;


    constructor(Name:string,Salary:Number)
    {
        this.empName=Name;
        this.empSalary=Salary;
    }
    Display(): void
    {
console.log(this.empName+" "+this.empSalary);
    }
}

var emp=new Employee("Bill",20000);
emp.Display();