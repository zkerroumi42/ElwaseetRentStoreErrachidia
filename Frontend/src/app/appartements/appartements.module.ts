import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListAppartementComponent } from './list-appartement/list-appartement.component';
const routes: Routes = [
  {
    path: '',
    children: [


      { path: 'appartements', component: ListAppartementComponent },

    ],
  },
];



@NgModule({
  declarations: [
    ListAppartementComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AppartementsModule { }
