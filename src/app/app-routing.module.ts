import { AuthsignService } from './services/guards/authsign.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MobilesTabletsComponent } from './mobiles-tablets/mobiles-tablets.component';
import { OrdersComponent } from './orders/orders.component';
import { MomsBabiesComponent } from './moms-babies/moms-babies.component';
import { ToysComponent } from './toys/toys.component';
import { HealthBeautyComponent } from './health-beauty/health-beauty.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/guards/auth.guard';
import { AuthdashboardService } from './services/guards/authdashboard.service';


const routes: Routes = [
  {path: '', component: HomeComponent, data: {index: 0}},
  {path: 'signin', component: SigninComponent, canActivate: [AuthsignService], data: {index: 2}},
  {path: 'signup', component: SignupComponent, canActivate: [AuthsignService], data: {index: 1}},
  {path: 'appliances', component: AppliancesComponent},
  {path: 'electronics', component: ElectronicsComponent},
  {path: 'health-beauty', component: HealthBeautyComponent},
  {path: 'toys', component: ToysComponent},
  {path: 'moms-babies', component: MomsBabiesComponent},
  {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard], data: {index: 1}},
  {path: 'mobiles-tablets', component: MobilesTabletsComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthdashboardService] , data: {index: 2}},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
