import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
//firebasesettings
import { environment } from 'src/environments/environment';
import{AngularFireDatabaseModule} from '@angular/fire/database';
import{AngularFirestoreModule} from '@angular/fire/firestore';
import{AngularFireStorageModule} from '@angular/fire/storage';
import{AngularFireModule} from '@angular/fire';
import{AngularFireAuthModule} from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,'portal'),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
