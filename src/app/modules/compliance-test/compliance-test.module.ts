import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedTestComponent } from './completed-test/completed-test.component';
import { OutstandingTestComponent } from './outstanding-test/outstanding-test.component';
import { StartExamComponent } from './start-exam/start-exam.component';
import { ExamInstructionComponent } from './exam-instruction/exam-instruction.component';
import { Routes } from '@angular/router';
import { HomeComponent } from '../admin/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'outstanding-test', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'completed-test', component: CompletedTestComponent },
      { path: 'outstanding-test', component: OutstandingTestComponent },
      { path: 'start-exam', component: StartExamComponent },
      { path: 'exam-instruction', component: ExamInstructionComponent },
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
    CompletedTestComponent,
    OutstandingTestComponent,
    StartExamComponent,
    ExamInstructionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComplianceTestModule { }
