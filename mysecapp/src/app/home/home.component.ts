import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Name:string;

  constructor() {
    this.Name="Giri Babu"
   }

  ngOnInit(): void {
    console.log(this.Name);
  }

}
