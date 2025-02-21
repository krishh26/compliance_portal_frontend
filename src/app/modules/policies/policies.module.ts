import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliciesListComponent } from './policies-list/policies-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../admin/home/home.component';
import { UploadPoliciesComponent } from './upload-policies/upload-policies.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { DatapolicyVersionComponent } from './datapolicy-version/datapolicy-version.component';

const routes: Routes = [
  { path: '', redirectTo: 'policies-list', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'policies-list', component: PoliciesListComponent },
      { path: 'terms-conditions', component: TermsConditionsComponent },
      { path: 'datapolicy-version', component: DatapolicyVersionComponent },
    ]
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: ""
  }
];

@NgModule({
  declarations: [
    PoliciesListComponent,
    UploadPoliciesComponent,
    TermsConditionsComponent,
    DatapolicyVersionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PoliciesModule { }
