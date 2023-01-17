class Emp
{
    eName:String=" ";
    esal:Number=0;

    constructor(Name:string,Sal:number)
    {
        this.eName=Name;
        this.esal=Sal;

    }
    display():void
    {
        console.log(this.eName+" "+this.esal);


    }
}

var em =new Emp("Bill",20000);

em.display();