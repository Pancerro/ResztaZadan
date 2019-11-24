import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  ngOnInit(){
  }
  info:Boolean;
  user = this.authService.user;
  database=firebase.database();
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}
  logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['/login']));
  }
  userVerified(){
    this.info=this.authService.userEmailVerified();
  }
  dashboard(){
    this.router.navigate(['/dashboardtwo']);
  }
}
