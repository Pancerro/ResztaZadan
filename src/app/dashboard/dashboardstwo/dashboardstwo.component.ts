import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';
export interface User {
  id: string;
  name: string;
  desc: string;
}

@Component({
  selector: 'app-dashboardstwo',
  templateUrl: './dashboardstwo.component.html',
  styleUrls: ['./dashboardstwo.component.css']
})
export class DashboardstwoComponent implements OnInit{
  ngOnInit(){
    var acc = document.getElementsByClassName("accordion");
    var      i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
}
users: User[] = [];
user:User;
headers;
  constructor(
    private router: Router,
    private authService: AuthService,
    private api:ApiService
  ) {
  }
  myFunction():void {
    var para = document.createElement("P");
    para.innerHTML = "To jest paragraf.";
    document.getElementById("myDIV").appendChild(para);
  }
  appearLogo:Boolean=false;
  appearImage:Boolean=false;
  appearImageMethod():void{
    this.appearImage=!this.appearImage;
  }
  appearLogoMethod():void{
    this.appearLogo=!this.appearLogo;
  }
  logout():void{
    this.authService.logout()
      .then(() => this.router.navigate(['/login']));
  }
  dashboard():void{
    this.router.navigate(['/dashboard']);
  }
  getUsers() {
    this.api.getUsers()
    .subscribe(resp => {
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);
  
      for (const data of resp.body) {
        this.users.push(data);
      }
    });
  }
  addUsers() {
  
    this.api.addUser(this.user);

  }
}
