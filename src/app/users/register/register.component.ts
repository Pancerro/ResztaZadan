import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
 public password: String='';
 captha:boolean=false;
  constructor( private router: Router,
    private authService: AuthService) { }
  ngOnInit() {}
  login(){
    this.router.navigate(['login']);
  }
  register() {
    if(this.matchingPasswords()==true){
      if(this.captha==true)
      {
    this.authService.register(this.credentials)
      .then(() => this.info ='You failed to register');
      }else this.info='Select captha';
    } else this.info='Passwords do not match';
  }
  matchingPasswords():boolean{
    if(this.password.valueOf()==this.credentials.password.valueOf()) return true;
    else return false;
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.captha=true;
}

  

}
