import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support/support.component';
import { HomeComponent } from '../admin/home/home.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'support', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'supports', component: SupportComponent },

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
    SupportComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SupportModule { }
