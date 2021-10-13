import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { VisaStatusComponent } from './components/visa-status/visa-status.component';
import { HousingComponent } from './components/housing/housing.component';


const routes: Routes = [
  {path:'' ,component: LoginComponent},
  {path:'employee', component: EmployeeComponent},
  {path:'employee/home',component: HomeComponent},
  {path:'employee/personalInfo', component: PersonalInfoComponent},
  {path:'employee/visaStatus',component: VisaStatusComponent},
  {path:'employee/housing', component: HousingComponent},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
