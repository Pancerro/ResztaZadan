import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User, auth } from 'firebase';
import { Observable } from 'rxjs/index';
import { Router } from '@angular/router';

export interface Credentials {
  email: string;
  password: string;
}


@Injectable({providedIn: 'root'})
export class AuthService {
  readonly authState$: Observable<User | null> = this.fireAuth.authState;
  constructor(private router: Router,private fireAuth: AngularFireAuth) {}
  get user(): User | null {
    return this.fireAuth.auth.currentUser;
  }

  login({email, password}: Credentials) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  register({email, password}: Credentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      this.SendVerificationMail();
      window.alert('You can now log in!');
      this.router.navigate(['login']);
    }).catch((error) => {
      window.alert(error.message)
    })
  }
  SendVerificationMail() {
    return this.fireAuth.auth.currentUser.sendEmailVerification();
  }
  logout() {
    return this.fireAuth.auth.signOut();
  }
  googleAuth() {
      return this.AuthLogin(new auth.GoogleAuthProvider());
    }  
    AuthLogin(provider) {
      return this.fireAuth.auth.signInWithPopup(provider)
      .then((result) => {
          console.log('You have been successfully logged in!')
      }).catch((error) => {
          console.log(error)
      })
    }
  resetPassword({email}:Credentials){
    return this.fireAuth.auth.sendPasswordResetEmail(email)
  }
}