import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learnpipe',
  templateUrl: './learnpipe.component.html',
  styleUrls: ['./learnpipe.component.css']
})
export class LearnpipeComponent implements OnInit {
  employees: any[] = [  
    {  
        code: 'emp101', name: 'karthik', gender: 'Male',  
        annualSalary: 5500, dateOfBirth: '9/15/2022'  
    },  
    {  
        code: 'emp102', name: 'sachin', gender: 'Male',  
        annualSalary: 5700.95, dateOfBirth: '9/6/1982'  
    },  
    {  
        code: 'emp103', name: 'rahul', gender: 'Male',  
        annualSalary: 5900, dateOfBirth: '12/8/1979'  
    },  
    {  
        code: 'emp104', name: 'mary', gender: 'Female',  
        annualSalary: 6500.826, dateOfBirth: '4/10/1980'  
    },  
];  

  constructor() { }

  ngOnInit(): void {
  }

}
