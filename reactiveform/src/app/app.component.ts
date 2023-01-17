import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from './app.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveform';
  countryList :Country[]=[{id:"1",name:"India"},{id:"2",name:"USA"},{id:"3",name:"England"}];
  
  
  contactform=new FormGroup({

    firstname:new FormControl('',[Validators.required,Validators.minLength(4)]),
    lastname:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    gender:new FormControl(),
    email:new FormControl('',[Validators.required,Validators.email]),
    country:new FormControl(),
    dob:new FormControl(),
    married:new FormControl()
  });
  
  get firstname()
  {
    return this.contactform.get('firstname');
  }
  get lastname()
  {
    return this.contactform.get('lastname');
  }
  get email()
  {
    return this.contactform.get('email');
  }
  get married()
  {
    return this.contactform.get('married');
  }
  get country()
  {
    return this.contactform.get('country');
  }
  get gender()
  {
    return this.contactform.get('firstname');
  }
  onSubmit()
  {
    console.log(this.contactform.value);

  }
 
}
