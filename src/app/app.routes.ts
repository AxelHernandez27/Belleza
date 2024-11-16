import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: 'servicios', component: ServiciosComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }