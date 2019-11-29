import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './users/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DashboardstwoComponent } from './dashboard/dashboardstwo/dashboardstwo.component';
import { RegisterComponent } from './users/register/register.component';
import { WelcomeSiteComponent } from './dashboard/welcome-site/welcome-site.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule,  MatDialogModule,MatInputModule, MatButtonModule} from '@angular/material';
import { FormModalComponent } from './dashboard/form-modal/form-modal.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  imports: [ 
    MatSliderModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule, 
    FormsModule,
    AngularFireAuthModule,
    AppRoutingModule,
    RecaptchaModule.forRoot(),
    AngularFireDatabaseModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule

  ],
  declarations: [ AppComponent, LoginComponent, DashboardComponent, DashboardstwoComponent, RegisterComponent, WelcomeSiteComponent,FormModalComponent],
  entryComponents: [FormModalComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  
 }

