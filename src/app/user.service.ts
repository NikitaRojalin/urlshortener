import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './modal';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

     // 'keepAfterRouteChange' flag is true

   }
   getAll() {
         return this.http.get<User[]>(`http://localhost:4200`);
     }

     register(user: User) {
         console.log(user);
         return this.http.post(`http://localhost:4200/register`, user);
     }

     delete(id: number) {
         return this.http.delete(`/users/${id}`);
     }
}
