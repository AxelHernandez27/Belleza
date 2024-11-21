import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { NgModule } from '@angular/core';
import { ContactoComponent } from './contacto/contacto.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'portafolio', component: PortafolioComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: '*', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }