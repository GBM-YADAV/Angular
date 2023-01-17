import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  village:string;
  pincode:string;
  constructor() { 
    this.village="Peyanakandriga";
    this.pincode="517004";
  }

  ngOnInit(): void {

    console.log(" my village name is "+this.village);
    console.log("my pincode is "+this.pincode);
  }

}
