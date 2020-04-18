import { AuthService } from './backend.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
//firebasesettings
import { environment } from 'src/environments/environment';
import{AngularFirestoreModule} from '@angular/fire/firestore';
import{AngularFireModule} from '@angular/fire';
import{AngularFireAuthModule} from '@angular/fire/auth';
import { ServiceWorkerModule } from '@angular/service-worker';


const config={
  apiKey: "AIzaSyDkukP6UjX5I_gcP2C0tSEQPiyimRwg6No",
authDomain: "recruitment-portal-732b0.firebaseapp.com",
databaseURL: "https://recruitment-portal-732b0.firebaseio.com",
projectId: "recruitment-portal-732b0",
storageBucket: "recruitment-portal-732b0.appspot.com",
messagingSenderId: "820044196096",
appId: "1:820044196096:web:8d4c20172d144a6c186be5",
measurementId: "G-2Z03HD317P"
};



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LandingpageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    ,
    AngularFirestoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
