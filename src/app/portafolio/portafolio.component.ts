import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],
})
export class PortafolioComponent implements AfterViewInit, OnInit {

  servicioSeleccionado: any;
  isModalOpen = false;

  album = [
    {
      id: 1,
      titulo: "Maquillaje Social de Día",
      antes: "assets/socialDiaA.jpeg",
      despues: "assets/socialDiaD.jpeg"
    },
    {
      id: 2,
      titulo: "Maquillaje Social de Noche",
      antes: "assets/socialNocheA.jpeg",
      despues: "assets/socialNocheD.jpeg"
    },
    {
      id: 3,
      titulo: "Maquillaje Smokey Eyes",
      antes: "assets/smokeyEyesA.jpeg",
      despues: "assets/smokeyEyesD.jpeg"
    },
    {
      id: 4,
      titulo: "Maquillaje Piel Madura con Hilos Tensores",
      antes: "assets/pielMaduraHilosTensoresA.jpeg",
      despues: "assets/pielMaduraHilosTensoresD.jpeg"
    },
    {
      id: 5,
      titulo: "Maquillaje de XV Años",
      antes: "assets/antesXV.jpeg",
      despues: "assets/despuesXV.jpeg"
    },
    {
      id: 6,
      titulo: "Maquillaje Nupcial de Día",
      antes: "assets/nupcialAntes.jpeg",
      despues: "assets/nupcialDiaDespues.jpeg"
    },
    {
      id: 7,
      titulo: "Maquillaje Nupcial de Noche",
      antes: "assets/nupcialAntes.jpeg",
      despues: "assets/nupcialNochedespues.jpeg"
    },
    {
      id: 8,
      titulo: "Maquillaje Full Color",
      antes: "assets/fullcolorAntes.jpeg",
      despues: "assets/fullcolorDespues.jpeg"
    },
    {
      id: 9,
      titulo: "Maquillaje Editorial",
      antes: "assets/nupcialAntes.jpeg",
      despues: "assets/editorialDespues.jpeg"
    }
  ]

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Verificar si la URL contiene un parámetro numérico (portafolio/{numero})
    const servicioId = this.route.snapshot.paramMap.get('id');
    
    // Si existe un id, abrir el modal
    if (servicioId) {
      this.servicioSeleccionado = this.album.find(item => item.id === +servicioId);
      this.isModalOpen = true;
      console.log(this.isModalOpen)
    }
  }

  ngAfterViewInit() {
    new Swiper('.video-swiper', {
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

  closeModal() {
    this.isModalOpen = false;
    this.router.navigate(['/portafolio']); // Redirige a la URL base de portafolio sin el id
  }
}
