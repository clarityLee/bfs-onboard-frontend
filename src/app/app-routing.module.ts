import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { On_boardingModule } from './onboarding/onboarding.module';
import { RegisterComponent } from './components/register/register.component';
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
import { AuthGuard } from './guards/auth.guard';


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
    canActivate: [AuthGuard],
    children:[
      {
        path:'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'personalInfo', 
        component: PersonalInfoComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'visaStatus',
        component: VisaStatusComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'housing', 
        component: HousingComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path:'hr', 
    component: HrComponent,
    children:[
      {
        path:'home',
        component: HrHomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'employeeProfile', 
        component: EmployeeProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'visaStatusManagement',
        component: VisaStatusManagementComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'hire',
        component: HireComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'houseManagement', 
        component: HouseManagementComponent,
        canActivate: [AuthGuard]
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
