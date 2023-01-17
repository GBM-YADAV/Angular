import { Component, OnInit } from '@angular/core';
import { Student } from '../Models/Student';

@Component({
  selector: 'app-single-stu',
  templateUrl: './single-stu.component.html',
  styleUrls: ['./single-stu.component.css']
})
export class SingleStuComponent implements OnInit {
 Student:any={rollno:101,
  name:"Giri",
  marks:95,
  dateofbirth:'12/15/2001'
}
  constructor() { }

  ngOnInit(): void {


  }




}
