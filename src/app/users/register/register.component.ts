import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  credentials = {
    email: '',
    password: ''
  };
 info: String;
 captcha:Boolean;
  constructor( private router: Router,
    private authService: AuthService,
    private dateService: DataService) { }
  login():void{
    this.router.navigate(['login']);
  }
  register(registerForm):void {
    if(this.matchingPasswords(registerForm.repeatPassword,registerForm.password)==true  && this.captchaIsTrue()){
        this.credentials.email=registerForm.email;
        this.credentials.password=registerForm.password;
      this.authService.register(this.credentials)
      .then(() => this.info ='You failed to register')
      .then(()=>this.dateService.writeUserData(this.authService.user.uid,'userInfo','info',registerForm.name,registerForm.surname,this.authService.user.email))
    }
  }
  matchingPasswords(repeatPassword,password):boolean{
    if(repeatPassword.valueOf()==password.valueOf()) return true;
    else {
      this.info='Passwords do not match';
      return false;
    }
  }
  captchaIsTrue():boolean{
    if(this.captcha) return true;
    else{
      this.info="select your Captha!"
      return false;
    }
  }
  resolved(captchaResponse):void {
    this.captcha=captchaResponse;
} 
}
