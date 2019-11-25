import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as firebase from 'firebase';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  credentials = {
    email: '',
    password: ''
  }
 info: String;
 public password: String;
 public name:String;
 public surname:String;
 private userId:String;
 captcha:String;
  constructor( private router: Router,
    private authService: AuthService,
    private dateService: DataService) { }
  ngOnInit() {}
  login(){
    this.router.navigate(['login']);
  }
  register() {
    if(this.matchingPasswords()==true){
      if(this.captcha)
      {
      this.authService.register(this.credentials)
      .then(() => this.info ='You failed to register')
      .then(()=>this.dateService.writeUserData(this.userId = firebase.auth().currentUser.uid,'userInfo','info',this.name,this.surname,this.credentials.email))
      } else this.info='Select captha';
    } else this.info='Passwords do not match';
  }
  matchingPasswords():boolean{
    if(this.password.valueOf()==this.credentials.password.valueOf()) return true;
    else return false;
  }
  resolved(captchaResponse: string) {
    this.captcha=captchaResponse;
} 
}
