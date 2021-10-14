import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './components/employee/employee.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { VisaStatusComponent } from './components/visa-status/visa-status.component';
import { HousingComponent } from './components/housing/housing.component';
import { NameSectionComponent } from './components/personal-info/name-section/name-section.component';
import { AddressSectionComponent } from './components/personal-info/address-section/address-section.component';
import { ContactSectionComponent } from './components/personal-info/contact-section/contact-section.component';
import { EmploymentSectionComponent } from './components/personal-info/employment-section/employment-section.component';
import { EmergencyContactSectionComponent } from './components/personal-info/emergency-contact-section/emergency-contact-section.component';
import { DocumentSectionComponent } from './components/personal-info/document-section/document-section.component';
import { TestComponent } from './components/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HrHomeComponent } from './components/hr/hr-home/hr-home.component';
import { EmployeeProfileComponent } from './components/hr/employee-profile/employee-profile.component';
import { VisaStatusManagementComponent } from './components/hr/visa-status-management/visa-status-management.component';
import { HireComponent } from './components/hr/hire/hire.component';
import { HouseManagementComponent } from './components/hr/house-management/house-management.component';
import { HrNavigationComponent } from './components/hr/hr-navigation/hr-navigation.component';
//import {MatDialogModule} from '@angular/material/dialog';

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
    TestComponent,
    HrHomeComponent,
    EmployeeProfileComponent,
    VisaStatusManagementComponent,
    HireComponent,
    HouseManagementComponent,
    HrNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
