import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
   fname:string;
   lname:String;

  constructor() { }

  ngOnInit(): void {
  }

  onSumbit(loginform:any)
  { this.fname=loginform.value.firstname;
    this.lname=loginform.value.lastname;
    console.log("name :"+this.fname+" "+this.lname);

  }

}


