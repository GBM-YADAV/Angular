import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Product:Product={Id:1,ProductName:"shoes",Price:5000};
  ProductList:Product[]=[
    {Id:1,ProductName:"shoes",Price:5000},
    {Id:2,ProductName:"socks",Price:2000},
    {Id:3,ProductName:"slipper",Price:4500},
    {Id:4,ProductName:"sandle",Price:3000}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
