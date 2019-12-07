import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-site',
  templateUrl: './welcome-site.component.html',
  styleUrls: ['./welcome-site.component.css']
})
export class WelcomeSiteComponent {

  constructor(private router: Router) {}
login():void
{
  this.router.navigate(['/login']);
}
register():void
{
  this.router.navigate(['/register']);
}
}
