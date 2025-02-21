import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'policies', loadChildren: () => import('./modules/policies/policies.module').then(m => m.PoliciesModule) },
  { path: 'compliance-test', loadChildren: () => import('./modules/compliance-test/compliance-test.module').then(m => m.ComplianceTestModule) },
  { path: 'support', loadChildren: () => import('./modules/support/support.module').then(m => m.SupportModule) },
  {
    path: 'login',
    component: LoginComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
