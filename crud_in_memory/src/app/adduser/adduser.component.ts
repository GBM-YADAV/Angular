
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Models/User';
import { UserService } from '../user.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent{
  
  


  constructor(private _service:UserService,private route :Router) { }

onSubmit(userForm:any) 
{
  this._service.Adduser(userForm.value);
  alert("record added successfully")
    this.route.navigate(['/list']);
}
}

