import { NgModule } from '@angular/core';
import { AddressSectionComponent } from './components/employee/personal-info/address-section/address-section.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ContactSectionComponent } from './components/employee/personal-info/contact-section/contact-section.component';
import { DocumentSectionComponent } from './components/employee/personal-info/document-section/document-section.component';
import { EmergencyContactSectionComponent } from './components/employee/personal-info/emergency-contact-section/emergency-contact-section.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeProfileComponent} from './components/hr/employee-profile/employee-profile.component';
import { EmploymentSectionComponent } from './components/employee/personal-info/employment-section/employment-section.component';
import { FormsModule } from '@angular/forms';
import { HireComponent } from './components/hr/hire/hire.component';
import { HomeComponent } from './components/employee/home/home.component';
import { HouseManagementComponent } from './components/hr/house-management/house-management.component';
import { HousingComponent } from './components/employee/housing/housing.component';
import { HrHomeComponent } from './components/hr/hr-home/hr-home.component';
import { HrNavigationComponent } from './components/hr/hr-navigation/hr-navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { NameSectionComponent } from './components/employee/personal-info/name-section/name-section.component';
import { NavigationComponent } from './components/employee/navigation/navigation.component';
import { On_boardingModule } from './onboarding/onboarding.module';
import { PersonalInfoComponent } from './components/employee/personal-info/personal-info.component';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { RegisterComponent } from './register/register.component';
=======
import { RegisterComponent } from './components/register/register.component';
import { TestComponent } from './components/test/test.component';
>>>>>>> main
import { VisaStatusComponent } from './components/employee/visa-status/visa-status.component';
import { VisaStatusManagementComponent } from './components/hr/visa-status-management/visa-status-management.component';
import { HrComponent } from './components/hr/hr.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalEmployeeDetails } from './components/hr/hire/hire.component';

import { TestComponent } from './components/test/test.component';
import { DialogContentExampleDialog } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    NavigationComponent,
    HomeComponent,
    PersonalInfoComponent,
    VisaStatusComponent,
    HousingComponent,
    NameSectionComponent,
    AddressSectionComponent,
    ContactSectionComponent,
    EmploymentSectionComponent,
    EmergencyContactSectionComponent,
    DocumentSectionComponent,
    HrHomeComponent,
    EmployeeProfileComponent,
    VisaStatusManagementComponent,
    HireComponent,
    HouseManagementComponent,
    HrNavigationComponent,
    RegisterComponent,
    HrComponent,
    ModalEmployeeDetails,
    TestComponent,
    DialogContentExampleDialog
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    On_boardingModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
