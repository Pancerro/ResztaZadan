import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';
export class Smartphone {
  constructor(
    public id:string,
    public name: string,
    public description: string,
    public price: number) {}
}
@Component({
  selector: 'app-dashboardstwo',
  templateUrl: './dashboardstwo.component.html',
  styleUrls: ['./dashboardstwo.component.css']
})
export class DashboardstwoComponent{
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
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = this.smartphones[1].name;
    tr.appendChild(td);
    var tdd = document.createElement("td");
    tdd.innerHTML = this.smartphones[1].description;
    tr.appendChild(tdd);


    document.getElementById("myTABLE").appendChild(tr);
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
  window.location.reload();
  }
  deleteSmartphone(deleteForm):void{
  this.api.deleteProducts(deleteForm.id).subscribe();
  window.location.reload();
  }
  deleteSmartphoneInList(deleteID):void{
    this.api.deleteProducts(deleteID).subscribe();
    window.location.reload();
    }
  updateSmartphone(updateForm):void{
  this.api.updateProducts(updateForm.id,updateForm).subscribe();
  window.location.reload();
  }
}
