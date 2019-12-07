import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { Observable, VirtualTimeScheduler } from 'rxjs';
export class Smartphone {
  constructor(
    public id:string,
    public name: string,
    public desc: string,
    public price: number,
    public updated: string) {}
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
public smartphones: Smartphone[] = [];
  constructor(
    private router: Router,
    private authService: AuthService,
    private api:ApiService,
  ) {
    this.api.getProducts().subscribe((res : Smartphone[])=>{
        this.smartphones = res;
    });

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
  addNewSmartphone(addForm):void{
    this.api.addProducts(addForm)
  .subscribe(smartphone => this.smartphones.push());
  }
  deleteSmartphone(deleteForm):void{
  this.api.deleteProducts(deleteForm.id).subscribe();
  }
  deleteSmartphoneInList(deleteID):void{
    this.api.deleteProducts(deleteID).subscribe();
    }
  updateSmartphone(updateForm):void{
  this.api.updateProducts(updateForm.id,updateForm).subscribe();
  }
}
