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

  info = '';

  constructor(
    private router: Router,
    private authService: AuthService
    ) {}

  login() {
    this.authService.login(this.credentials)
      .then(() => this.router.navigate(['/dashboard']))
      .catch(err => this.info = 'WRONG EMAIL OR PASSWORDS');
  }

  register() {
    this.authService.register(this.credentials)
      .then(() => this.info = 'ACCOUNT CREATED, PLZ LOGIN IN!')
      .catch(err => console.log(err.message));
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
}

