import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getUsersUpdate(userId: string, name: string) {
    throw new Error("Method not implemented.");
  }
  constructor(public db:AngularFireDatabase) {
   }
  
   getUserInfo(userId){
     return this.db.list('/users/'+userId).valueChanges();
   }
   userNameUpdate(userId,name){
    return this.db.object('users/'+userId+'/userInfo').update({username: name})
  }
  userSurnameUpdate(userId,surname){
    return this.db.object('users/'+userId+'/userInfo').update({usersurname: surname})
  }
  userEmailUpdate(userId,email){
    return this.db.object('users/'+userId+'/userInfo').update({email: email})
  }
   deleteUser(userId){
     return this.db.list('users/'+userId).remove();
   }
   writeUserData(userId,name,surname,email){
    firebase.database().ref('users/'+ userId+'/userInfo').set({
      username:name,
      usersurname:surname,
      email:email
    });}
     // console.log(this.db.list('users/').update(this.userId,{username: 'Adrian'}));
  // console.log(this.db.list('users/'+this.userId).remove('usersurname'));
}
