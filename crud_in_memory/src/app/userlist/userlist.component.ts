import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
   userlist:User[]=[];
  constructor(private _service:UserService) { }

  ngOnInit(): void {
    this.userlist=this. _service.getUsers();

  }
  deleteUser(id:number)
  {
    confirm("do u want to deletr this record really");
    this._service.removeUser(id);
  }

}
