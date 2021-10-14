import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PacComponent } from './pac/pac.component';
import { RefContactComponent } from './ref-contact/ref-contact.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { PersonalDocsComponent } from './personal-docs/personal-docs.component';
import { DoneComponent } from './done/done.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PersonalInfoComponent,
    PacComponent,
    RefContactComponent,
    EmergencyContactComponent,
    PersonalDocsComponent,
    DoneComponent,
    OnboardingComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    PersonalInfoComponent,
    PacComponent,
    RefContactComponent,
    EmergencyContactComponent,
    PersonalDocsComponent,
    DoneComponent,
    OnboardingComponent,
  ],
})
export class On_boardingModule {}
