import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  ngOnInit():void{
    Aos.init({
      duration: 1200,  // Duración de la animación (en milisegundos)
      once: true,      // Si quieres que las animaciones solo se activen una vez
      easing: 'ease-out', // Define el tipo de easing (opcional)
      offset: 120,     // La distancia desde la que se activa la animación al hacer scroll
    });
  }

  ngAfterViewChecked() {
    Aos.refresh(); // Refresca AOS cuando el contenido cambia
  }
}
