import { Component, OnInit } from '@angular/core';
import { Category } from '../Models/Category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  catlist:Category[]=[
    {CatId:1,CatName:"1st category"},
    {CatId:2,CatName:"2nd category"},
    {CatId:3,CatName:"3rd category"},
    {CatId:4,CatName:"4th category"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
