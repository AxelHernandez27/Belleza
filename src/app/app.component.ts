import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import *as AOS from 'aos';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Belleza';
  ngOnInit():void{
    AOS.init({
      duration: 1200,  // Duración de la animación (en milisegundos)
      once: true,      // Si quieres que las animaciones solo se activen una vez
      easing: 'ease-out', // Define el tipo de easing (opcional)
      offset: 120,     // La distancia desde la que se activa la animación al hacer scroll
    });
  }

  ngAfterViewChecked() {
    AOS.refresh(); // Refresca AOS cuando el contenido cambia
  }
}
