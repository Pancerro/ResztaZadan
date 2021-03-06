import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {HttpClient} from '@angular/common/http';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Observable} from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material';
import { FormModalComponent } from '../form-modal/form-modal.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  private API_KEY='9b43198568fc4738bd5e4eccb6d24c20';
  public image:String;
  public articles;
  tableParent:string="Do";
  users:Observable<any[]>;
  lists:Observable<any[]>;
  dialogValue:string; 
  sendValue:string;
  private userId =this.authService.user.uid;
  taskTitle: string;
  taskDescription:string;
  verifyEmail=this.authService.user.emailVerified;
  ngOnInit(){}
  constructor(
    private router: Router,
    private authService: AuthService,
    private http:HttpClient,
    private dataService: DataService,
    public db:AngularFireDatabase,
    public dialog: MatDialog,
  ) {
        this.users=dataService.getDate(this.userId,"userInfo");
        this.lists=this.dataService.getDate(this.userId,this.tableParent);    
  }
  addTask(): void {
    const dialogRef = this.dialog.open(FormModalComponent, {
      width: '250px',
        });

    dialogRef.afterClosed().subscribe(result => {
      this.taskTitle = result.title;
      this.taskDescription=result.description;
      this.dataService.writeUserTable(this.userId,this.tableParent,this.taskTitle,this.taskTitle,this.taskDescription);
    });
  }
  logout():void{
    this.authService.logout() 
      .then(() => this.router.navigate(['/login']));
  }
  dashboard():void{
    this.router.navigate(['/dashboardtwo']);
  }
  public getDogImage():void{
    console.log(this.authService.user.emailVerified);
    this.http.get(`https://dog.ceo/api/breeds/image/random`).subscribe((data)=>{
      this.image= data['message']; 
  })
  }
  public getArticles():void{
    this.http.get(`https://newsapi.org/v2/top-headlines?country=pl&pageSize=1&apiKey=${this.API_KEY}`).subscribe((data)=>{
      this.articles= data['articles']; 
  })
  }
  delete(removeItem):void {
    this.dataService.removeData(this.userId,this.tableParent,removeItem);
  }
  update(updateItem):void{
    this.addTask()
    this.delete(updateItem);
  }
  repeatVerifyEmail():void
    {
      this.authService.SendVerificationMail();
    }
  }
