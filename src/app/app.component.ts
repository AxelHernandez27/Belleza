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

  constructor(private translate: TranslateService) {

    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('en');

    const idioma = localStorage.getItem('idioma') || 'en';
    this.translate.use(idioma);
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
    this.translate.use(idioma);
    localStorage.setItem('idioma', idioma);
  }
}