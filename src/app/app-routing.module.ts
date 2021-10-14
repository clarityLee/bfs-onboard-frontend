import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { VisaStatusComponent } from './components/visa-status/visa-status.component';
import { HousingComponent } from './components/housing/housing.component';
import { HrHomeComponent } from './components/hr/hr-home/hr-home.component';
import {EmployeeProfileComponent} from './components/hr/employee-profile/employee-profile.component';
import {VisaStatusManagementComponent} from './components/hr/visa-status-management/visa-status-management.component';
import { HouseManagementComponent } from './components/hr/house-management/house-management.component';


const routes: Routes = [
  {path:'' ,component: LoginComponent},
  // {path:'onboarding', component: EmployeeComponent},
  {path:'employee/home',component: HomeComponent},
  {path:'employee/personalInfo', component: PersonalInfoComponent},
  {path:'employee/visaStatus',component: VisaStatusComponent},
  {path:'employee/housing', component: HousingComponent},
  {path:'hr/home',component: HrHomeComponent},
  {path:'hr/employeeProfile', component: EmployeeProfileComponent},
  {path:'hr/visaStatusManagement',component: VisaStatusManagementComponent},
  {path:'hr/houseManagement', component: HouseManagementComponent},
  {path:'**', redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
