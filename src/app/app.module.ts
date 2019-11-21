import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule }  from '@angular/router';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { DashboardComponent } from './users/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './users/login/login.component';
import { DashboardstwoComponent } from './users/dashboardstwo/dashboardstwo.component';
import { AppRoutingModule } from './app-routing.module';
import { CookieService } from "angular2-cookie/services/cookies.service";

const ROUTES = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'dashboardtwo',
    component:DashboardstwoComponent,
    canActivate:[AuthGuard],
}
];

@NgModule({
  imports: [ 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(ROUTES),
    AngularFireAuthModule,
    AppRoutingModule,
  ],
  declarations: [ AppComponent, LoginComponent, DashboardComponent, DashboardstwoComponent],
  providers: [CookieService],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  
 }

