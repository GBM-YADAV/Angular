import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  

  constructor(private route:Router,private active:ActivatedRoute) { }
    id:any=2;
  ngOnInit(): void {
  }

  onSubmit()
  {
    let Id=prompt("enter value of id","0");
    this.id=Id;
    if(this.id==1)
    {
      this.route.navigate(['grandchild'],{relativeTo:this.active})
      sessionStorage.setItem("name","Admin User");
    }
    else if( this.id==2)
    {
      this.route.navigate(['grandchild2'],{relativeTo:this.active})
      sessionStorage.setItem("name","Customer User");
    }
  }

}
