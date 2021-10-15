import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { On_boardingModule } from './onboarding/onboarding.module';
import { RegisterComponent } from './register/register.component';
import { OnboardingComponent } from './onboarding/onboarding/onboarding.component';

import { LoginComponent } from './components/login/login.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/employee/home/home.component';
import { PersonalInfoComponent } from './components/employee/personal-info/personal-info.component';
import { VisaStatusComponent } from './components/employee/visa-status/visa-status.component';
import { HousingComponent } from './components/employee/housing/housing.component';
import { HrHomeComponent } from './components/hr/hr-home/hr-home.component';
import {EmployeeProfileComponent} from './components/hr/employee-profile/employee-profile.component';
import {VisaStatusManagementComponent} from './components/hr/visa-status-management/visa-status-management.component';
import { HouseManagementComponent } from './components/hr/house-management/house-management.component';
import { HrComponent } from './components/hr/hr.component';
import { HireComponent } from './components/hr/hire/hire.component';
import { TestComponent } from './components/test/test.component';


const routes: Routes = [
  {
    path:'test',
    component: TestComponent
  },
  {
    path:'' ,
    component: LoginComponent
  },
  {
    path: 'login/register',
    component: RegisterComponent
  },
  { 
    path: 'on-boarding', 
    component: OnboardingComponent 
  },
  {
    path:'employee', 
    component: EmployeeComponent,
    children:[
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'personalInfo', 
        component: PersonalInfoComponent
      },
      {
        path:'visaStatus',
        component: VisaStatusComponent
      },
      {
        path:'housing', 
        component: HousingComponent
      }
    ]
  },
  {
    path:'hr', 
    component: HrComponent,
    children:[
      {
        path:'home',
        component: HrHomeComponent
      },
      {
        path:'employeeProfile', 
        component: EmployeeProfileComponent
      },
      {
        path:'visaStatusManagement',
        component: VisaStatusManagementComponent
      },
      {
        path:'hire',
        component: HireComponent
      },
      {
        path:'houseManagement', 
        component: HouseManagementComponent
      },
    ]
  },
  {
    path:'**', 
    redirectTo:'/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), On_boardingModule],
  exports: [RouterModule, On_boardingModule],
})
export class AppRoutingModule { }
