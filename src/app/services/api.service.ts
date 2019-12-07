import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Smartphone} from '../dashboard/dashboardstwo/dashboardstwo.component';
import { VirtualTimeScheduler } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { 
  }
  baseUrl:string="http://localhost:3000"
getProducts(){
    return this.http.get(this.baseUrl + '/products');
}
addProducts(smartphone:Smartphone){
  return this.http.post(this.baseUrl+ '/products',smartphone)
}
deleteProducts(id:Number){
  return this.http.delete(this.baseUrl+ '/products/'+id)
}
updateProducts(id:Number,smartphone:Smartphone){
  return this.http.put(this.baseUrl+ '/products/'+id,smartphone)
}
 }

  
