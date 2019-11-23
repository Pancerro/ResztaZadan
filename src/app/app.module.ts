import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule }  from '@angular/router';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './users/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CookieService } from "angular2-cookie/services/cookies.service";
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DashboardstwoComponent } from './dashboard/dashboardstwo/dashboardstwo.component';
import { RegisterComponent } from './users/register/register.component';
import { WelcomeSiteComponent } from './dashboard/welcome-site/welcome-site.component';

const ROUTES = [
  { path: '', redirectTo: '/welcome-site', pathMatch: 'full'},
  {path: 'welcome-site', component: WelcomeSiteComponent},
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
  },
  {
    path:'register',
    component:RegisterComponent,
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
    RouterModule.forRoot(ROUTES, {useHash: true}),
  ],
  declarations: [ AppComponent, LoginComponent, DashboardComponent, DashboardstwoComponent, RegisterComponent, WelcomeSiteComponent],
  providers: [CookieService],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  
 }

