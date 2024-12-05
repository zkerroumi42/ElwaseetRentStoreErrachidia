import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //  {
  //       path: '',
  //       component: HomeComponent,
  //       pathMatch: 'full',
  //   },

    {
        path: 'appartements',
        loadChildren: () => import('./appartements/appartements.module').then((m) => m.AppartementsModule),
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
