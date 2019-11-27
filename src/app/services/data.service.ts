import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public db:AngularFireDatabase) {
   }
   removeData(userId,tableparent,removeItem){
    return this.db.list('/users/'+userId+'/'+tableparent).remove(removeItem)
  }
   getDate(userId,tableparent){
     return this.db.list('/users/'+userId+'/'+tableparent).valueChanges();
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
   writeUserData(userId,tableparent,tablechild,name,surname,email){
    firebase.database().ref('users/'+ userId+'/'+tableparent+'/'+tablechild).set({
      username:name,
      usersurname:surname,
      email:email
    });}
    writeUserTable(userId,tableparent,tablechild,title,description){
      firebase.database().ref('users/'+ userId+'/'+tableparent+'/'+tablechild).set({
        title:title,
        description:description
      });}
}
