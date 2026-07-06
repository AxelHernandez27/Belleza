import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'Belleza';
  mostrarMensajeDesliza = false;

  cargandoIdioma = false;

  // Idioma que se mostrará como seleccionado
  idiomaSeleccionado = 'en';

  constructor(private translate: TranslateService) {

    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('en');

    const idioma = localStorage.getItem('idioma') || 'en';

    // Se aplica el idioma
    this.translate.use(idioma);

    // Se guarda para mantener el botón activo
    this.idiomaSeleccionado = idioma;
  }

  ngOnInit(): void {

    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out',
      offset: 120,
    });

    const mensajeVisto = localStorage.getItem('mensajeDeslizaVisto');

    if (!mensajeVisto) {
      this.mostrarMensajeDesliza = true;

      setTimeout(() => {
        this.mostrarMensajeDesliza = false;
        localStorage.setItem('mensajeDeslizaVisto', 'true');
      }, 5000);
    }
  }

  ngAfterViewInit(): void {
    AOS.refresh();
  }

  cambiarIdioma(idioma: string) {

    if (this.idiomaSeleccionado === idioma) return;

    this.idiomaSeleccionado = idioma;
    this.cargandoIdioma = true;

    setTimeout(() => {
      this.translate.use(idioma);
      localStorage.setItem('idioma', idioma);
      this.cargandoIdioma = false;
    }, 700);
  }

}