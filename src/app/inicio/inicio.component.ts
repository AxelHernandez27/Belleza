import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import Aos from 'aos';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, AfterViewInit {

  certificadoSeleccionado: any;
  isModalOpen = false;

  certificados = [
    {
      id: 1,
      titulo: "Certificado de Maquillaje Profesional",
      imagen: "assets/certificado3.jpeg"
    },
    {
      id: 2,
      titulo: "Certificado en Maquillaje Social",
      imagen: "assets/certificado4.jpeg"
    },
    {
      id: 3,
      titulo: "Certificado de Maquillaje Nupcial",
      imagen: "assets/certificado5.jpeg"
    },
    {
      id: 4,
      titulo: "Certificado de Maquillaje de Moda",
      imagen: "assets/certificado6.jpeg"
    },
  ];

  ngOnInit(): void {
    Aos.init({
      duration: 1200,  // Duración de la animación (en milisegundos)
      once: true,      // Si quieres que las animaciones solo se activen una vez
      easing: 'ease-out', // Define el tipo de easing (opcional)
      offset: 120,     // La distancia desde la que se activa la animación al hacer scroll
    });
  }

  ngAfterViewInit(): void {
    new Swiper('.certificados-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true, // Habilita el bucle infinito
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }

  ngAfterViewChecked() {
    Aos.refresh(); // Refresca AOS cuando el contenido cambia
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
