import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { On_boardingModule } from './onboarding/onboarding.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, RegisterComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, On_boardingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
