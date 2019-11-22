import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  ngOnInit(){
  }
  user = this.authService.user;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}
  logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['/login']));
  }
  dashboard(){
    this.router.navigate(['/dashboardtwo']);
  }
  
}
