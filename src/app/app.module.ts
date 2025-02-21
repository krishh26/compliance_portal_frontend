import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './modules/admin/admin.module';
import { LoginComponent } from './modules/auth/login/login.component';
import { ResetPasswordComponent } from './modules/auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './modules/auth/forgot-password/forgot-password.component';
import { PoliciesModule } from './modules/policies/policies.module';
import { SupportModule } from './modules/support/support.module';
import { ComplianceTestModule } from './modules/compliance-test/compliance-test.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    PoliciesModule,
    SupportModule,
    ComplianceTestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
