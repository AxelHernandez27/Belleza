import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Belleza';
  mostrarMensajeDesliza = false;

  ngOnInit(): void {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out',
      offset: 120,
    });

    // Verificar si el mensaje ya fue mostrado
    const mensajeVisto = localStorage.getItem('mensajeDeslizaVisto');
    if (!mensajeVisto) {
      this.mostrarMensajeDesliza = true; // Mostrar el mensaje

      // Ocultar el mensaje después de 5 segundos
      setTimeout(() => {
        this.mostrarMensajeDesliza = false;
        localStorage.setItem('mensajeDeslizaVisto', 'true'); // Registrar que ya se mostró
      }, 5000);
    }
  }

  ngAfterViewChecked() {
    AOS.refresh();
  }
}
