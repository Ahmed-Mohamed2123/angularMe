import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MobilesTabletsComponent } from './mobiles-tablets/mobiles-tablets.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { HealthBeautyComponent } from './health-beauty/health-beauty.component';
import { MomsBabiesComponent } from './moms-babies/moms-babies.component';
import { ToysComponent } from './toys/toys.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { OrdersComponent } from './orders/orders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HelperComponent } from './helper/helper.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobilesTabletsComponent,
    ElectronicsComponent,
    AppliancesComponent,
    HealthBeautyComponent,
    MomsBabiesComponent,
    ToysComponent,
    NotFoundComponent,
    SigninComponent,
    SignupComponent,
    OrdersComponent,
    NavbarComponent,
    HelperComponent,
    DashboardComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDtwPZxfr9n0h1olLtMrHYGOJd-x3bl1Mk",
      authDomain: "project1-6b329.firebaseapp.com",
      databaseURL: "https://project1-6b329.firebaseio.com",
      projectId: "project1-6b329",
      storageBucket: "project1-6b329.appspot.com",
      messagingSenderId: "547764035647",
      appId: "1:547764035647:web:9750e5798df8df7b25188a",
      measurementId: "G-12BZLE3XJ4"
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgxNavbarModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
