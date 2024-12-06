import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListAppartementComponent } from './list-appartement/list-appartement.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
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
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    ListAppartementComponent 
  ]
})
export class AppartementsModule { }



