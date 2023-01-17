import { Injectable } from '@angular/core';
import { User } from './Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   users: User[] = [
    {
      id: 1, firstname: 'Bill', lastname: ' gates', email: 'billg@gmail.com', profession: 'IT businessman', dateOfBirth
        : new Date(), imageUrl: '/assets/Images/pic1.jpg'
    },
    {
      id: 2, firstname: 'Sara', lastname: ' Samwel', email: 'SaraSamwel@gmail.com', profession: 'Angular Trainer', dateOfBirth
        : new Date(7, 15, 2015), imageUrl: '/assets/Images/pic2.jpg'
    },
    {

      id: 3, firstname: 'Manoj', lastname: ' Kumar', email: 'ManojKumar@gmail.com', profession: 'DotNet Trainer', dateOfBirth

        : new Date(8, 19, 2017), imageUrl: '/assets/Images/pic3.jpg'

    },

    {

      id: 4, firstname: 'Leena', lastname: ' Chandawarkar', email: 'LeenaChandawarkar@gmail.com', profession: 'Actor', dateOfBirth

        : new Date(1, 11, 2009), imageUrl: '/assets/Images/pic4.jpg'

    },

    {

      id: 5, firstname: 'Smita', lastname: ' Rajwade', email: 'SmitaRajwade@gmail.com', profession: 'Physiotherapist', dateOfBirth

        : new Date(12, 1, 1962), imageUrl: '/assets/Images/pic5.jpg'

    }

  ];

    getUsers():User[]
    {
      return this.users;
    }

    getUserById(id:number):any
    {
      let users:User[]=this.getUsers();
      return this.users.find(u=>u.id==id)
    }

    updateUser(user:any)

{ let index = this.users.findIndex(u => u.id == user.id);

  this.users.splice(index, 1);

  this.users.push(user);

}
Adduser(user:any)
{
  this.users.push(user);
}


  removeUser(id:number)

  {
  
    let index = this.users.findIndex(u => u.id == id);
  
    this.users.splice(index, 1);
  
  }
}


