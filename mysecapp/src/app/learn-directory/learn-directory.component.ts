import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-learn-directory',
  templateUrl: './learn-directory.component.html',
  styleUrls: ['./learn-directory.component.css']
})
export class LearnDirectoryComponent implements OnInit {

  constructor() { }
  number=prompt(" enter a number ","one");
  ngOnInit(): void {
  }

}
