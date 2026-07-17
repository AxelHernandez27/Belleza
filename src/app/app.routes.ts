import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { NgModule } from '@angular/core';
import { ContactoComponent } from './contacto/contacto.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { InicioComponent } from './inicio/inicio.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { UnasComponent } from './unas/unas.component';
import { PestanasComponent } from './pestanas/pestanas.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'unas', component: UnasComponent }, // ← nueva
  { path: 'pestanas', component: PestanasComponent }, // ← nueva
  { path: 'contacto', component: ContactoComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'portafolio/:id', component: PortafolioComponent },
  { path: 'privacidad', component: PrivacidadComponent },

  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio' }
];

