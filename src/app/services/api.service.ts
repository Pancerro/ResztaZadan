import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../dashboard/dashboardstwo/dashboardstwo.component';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  localUrl = 'assets/data/database.json';
  constructor(private http: HttpClient) { 
  }
  getUsers(): Observable<HttpResponse<User[]>> {
    return this.http.get<User[]>(
      this.localUrl, { observe: 'response' });
  }
addUsers(user: User): Observable<Object>{
    return this.http.post(this.localUrl, user);
}
 

addUser(id,name,desc){
this.http.put(this.localUrl,
{
"id":  id,
"name": name,
"description": desc
})
.subscribe(
data  => {
console.log("PUT Request is successful ", data);
},
error  => {
console.log("Rrror", error);
}
);
}

 }

  
