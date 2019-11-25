import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as firebase from 'firebase';
import {HttpClient} from '@angular/common/http';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable} from 'rxjs';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  API_KEY='9b43198568fc4738bd5e4eccb6d24c20';
  public image:String;
  public articles;
  users:Observable<any[]>;
  table:Observable<any[]>;
  userId = firebase.auth().currentUser.uid;
  ngOnInit(){}
  constructor(
    private router: Router,
    private authService: AuthService,
    private http:HttpClient,
    private dataService: DataService,
    public db:AngularFireDatabase,
  ) {
        this.users=dataService.getUserInfo(this.userId,'userInfo');
        dataService.writeUserTable(this.userId,'x','x','x','x','x');
        this.table=dataService.getUserInfo(this.userId,'x');
  }
  deleteSth(key){
    firebase.database().ref().child('/users/'+key+'/').remove();
}
  logout() {
    this.authService.logout() 
      .then(() => this.router.navigate(['/login']));
  }
  dashboard(){
    this.router.navigate(['/dashboardtwo']);
  }
  public getDogImage(){
    this.http.get(`https://dog.ceo/api/breeds/image/random`).subscribe((data)=>{
      this.image= data['message']; 
  })
  }
  public getArticles(){
    this.http.get(`https://newsapi.org/v2/top-headlines?country=pl&pageSize=1&apiKey=${this.API_KEY}`).subscribe((data)=>{
      this.articles= data['articles']; 
  })
  }
  

  }
