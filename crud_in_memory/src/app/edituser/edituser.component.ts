import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Models/User';
import { UserService } from '../user.service';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  sumbitted=false;
  userForm = new FormGroup({
    id:new FormControl(''),
    firstname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl(''),
    profession: new FormControl('')
    
    })

  constructor(private _service:UserService,private route :Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {

    let Id=this.activeroute.snapshot.params["id"];
    let user=this._service.getUserById(Id);
  
    this.userForm = new FormGroup({
    id:new FormControl('user?.id'),
     firstname: new FormControl(user.firstname, [Validators.required, Validators.minLength(4)]),
     lastname: new FormControl(user.lastname, [Validators.required, Validators.minLength(4)]),
     email: new FormControl(user.email),
    profession: new FormControl(user.profession,[Validators.required])
    
    })
    
  }
  get userFormControl()

{

  return this.userForm.controls;

}
  onSubmit()
  {
    this._service.updateUser(this.userForm.value);
    this.route.navigate(['/list']);

  }
  get firstname()
  {
    return this.userForm .get('firstname');
  }
  get lastname()
  {
    return this.userForm .get('lastname');
  }
  get email()
  {
    return this.userForm.get('email');
  }
  get profession()

{

  return this.userForm.get('profession');

}



}
