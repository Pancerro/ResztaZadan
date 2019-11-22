import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CookieService } from "angular2-cookie/core";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  ngOnInit(){
    this.cookieService.put(this.authService.user.email, "test");
    console.log("Set Test Cookie as Test");
  }
  user = this.authService.user;
  
  constructor(
    private router: Router,
    private authService: AuthService,
    private cookieService:CookieService
  ) {}
  getCookie(key: string) {
    return this.cookieService.get(key);
  }
  logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['/login']));
  }
  dashboard(){
    this.router.navigate(['/dashboardtwo']);
  }
  
}
