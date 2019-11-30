import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  }
  info:String = '';
  constructor(
    private router: Router,
    private authService: AuthService,
    private dateService: DataService
    ) {}
  login(loginForm):void {
    this.credentials.email=loginForm.email;
    this.credentials.password=loginForm.password
    this.authService.login(this.credentials)
      .then(() => this.router.navigate(['/dashboard']))
      .catch(err => this.info = 'WRONG EMAIL OR PASSWORDS');
  }
  googleAuth():void{
    this.authService.googleAuth()
    .then(() => this.router.navigate(['/dashboard'])
    .then(()=>this.dateService.writeUserData(this.authService.user.uid,'userInfo','info',"","",this.authService.user.email))
    .then(()=>this.authService.SendVerificationMail))
      .catch(err => console.log(err.message));
  }
  resetPasswords():void{
    this.authService.resetPassword(this.credentials)
    .then(() => this.info = 'CHECK YOUR E-MAIL')
      .catch(err => console.log(err.message));
  }
  register(){
    this.router.navigate(['register']);
  }
}

