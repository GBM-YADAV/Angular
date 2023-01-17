import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Name:String;
  constructor() { }

  ngOnInit(): void {
    this.Name="giri";
    console.log(this.Name);
  }

}
