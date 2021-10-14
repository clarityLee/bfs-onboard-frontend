import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { On_boardingModule } from './onboarding/onboarding.module';

import { RegisterComponent } from './register/register.component';
import { OnboardingComponent } from './onboarding/onboarding/onboarding.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login/register',
    pathMatch: 'full',
  },

  {
    path: 'login/register',
    component: RegisterComponent,
  },
  { path: 'on-boarding', component: OnboardingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), On_boardingModule],
  exports: [RouterModule, On_boardingModule],
})
export class AppRoutingModule {}
