import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { WelcomeSiteComponent } from './dashboard/welcome-site/welcome-site.component';
import { LoginComponent } from './users/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { DashboardstwoComponent } from './dashboard/dashboardstwo/dashboardstwo.component';
import { RegisterComponent } from './users/register/register.component';


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
  imports: [RouterModule.forRoot(ROUTES, {useHash: true}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
