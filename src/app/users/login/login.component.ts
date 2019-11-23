import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    private authService: AuthService
    ) {}

  login() {
    this.authService.login(this.credentials)
      .then(() => this.router.navigate(['/dashboard']))
      .catch(err => this.info = 'WRONG EMAIL OR PASSWORDS');
  }
  googleAuth(){
    this.authService.googleAuth()
    .then(() => this.router.navigate(['/dashboard']))
      .catch(err => console.log(err.message));
  }
  resetPasswords(){
    this.authService.resetPassword(this.credentials)
    .then(() => this.info = 'CHECK YOUR E-MAIL')
      .catch(err => console.log(err.message));
  }
  register(){
    this.router.navigate(['register']);
  }
}

