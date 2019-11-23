import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
 info: String = '';
  constructor( private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }
  register() {
    this.authService.register(this.credentials)
      .then(() => this.info = 'ACCOUNT CREATED, PLZ LOGIN IN!')
      .catch(err => console.log(err.message));
  }
}
