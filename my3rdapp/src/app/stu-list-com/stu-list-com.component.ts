import { Component, OnInit } from '@angular/core';
import { Student } from '../Models/Student';

@Component({
  selector: 'app-stu-list-com',
  templateUrl: './stu-list-com.component.html',
  styleUrls: ['./stu-list-com.component.css']
})
export class StuListComComponent implements OnInit {
  stulist:any[]=[
    {rollno:101,name:"Giri",marks:95,dateofbirth:'12/15/2001'},
    {rollno:102,name:"Mohana",marks:85,dateofbirth:'3/28/2001'},
    {rollno:103,name:"Vamsi",marks:97,dateofbirth:'7/19/2001'},
    {rollno:104,name:"Mounika",marks:46,dateofbirth:'2/5/2001'},
    {rollno:105,name:"Cherry",marks:25,dateofbirth:'9/1/2001'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
