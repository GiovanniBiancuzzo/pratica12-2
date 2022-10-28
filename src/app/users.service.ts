import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Login } from './models/login';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  URL = 'http://localhost:4201';

  private users:User[] =[
    {
      email:'c@fff.com',
      id:1,
      name:"carlo",
      role:'user'
    },
    {
      email:'luc@fff.com',
      id:2,
      name:"luca",
      role:'admin'
    }
  ]

  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get<User>(`${this.URL}/users`);
  }

  getUser(id:number){
    return this.users.find(user=>user.id==id)
  }
}
