import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-site',
  templateUrl: './welcome-site.component.html',
  styleUrls: ['./welcome-site.component.css']
})
export class WelcomeSiteComponent implements OnInit {

  constructor(private router: Router) {}
  ngOnInit() {
  }
login()
{
  this.router.navigate(['/login']);
}
register()
{
  this.router.navigate(['/register']);
}
}
