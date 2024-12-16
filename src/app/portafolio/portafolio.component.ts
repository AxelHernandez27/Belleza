import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper';

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
      titulo: "Maquillaje Social",
      antes: "assets/AntesmaquillajeSocial.jpeg",
      despues: "assets/DespuesmaquillajeSocial.jpeg"
    },
    {
      id: 10,
      titulo: "Maquillaje Nupcial",
      antes: "assets/Antesmaquillajenupcial.jpeg",
      despues: "assets/Despuesmaquillajenupcial.jpeg"
    },
    {
      id: 11,
      titulo: "Maquillaje Social en Piel Madura",
      antes: "assets/AntesmaquillajesSocialPielmadura.jpeg",
      despues: "assets/DespuesmaquillajesSocialPielmadura.jpeg"
    },
    {
      id: 12,
      titulo: "Maquillaje Social",
      antes: "assets/Despuesmaquillajeocial.jpeg",
      despues: "assets/Antesmaquillajeocial.jpeg"
    }
  ]

  peinadosAlbum = [
    {
      id: 1,
      titulo: "Peinado Ondas de Agua",
      imagen: "assets/peinado1.jpeg"
    },
    {
      id: 2,
      titulo: "Peinado Ondas de Agua",
      imagen: "assets/peinado2.jpeg"
    },
    {
      id: 3,
      titulo: "Peinado Ondas de Agua para Novia",
      imagen: "assets/peinado3.jpeg"
    },
    {
      id: 4,
      titulo: "Peinado Rizos para niña",
      imagen: "assets/peinado4.jpeg"
    },
    {
      id: 5,
      titulo: "Peinado Rizos para niña",
      imagen: "assets/peinado5.jpeg"
    },
    {
      id: 6,
      titulo: "Peinado Rizos para niña",
      imagen: "assets/peinado6.jpeg"
    },
    {
      id: 7,
      titulo: "Peinado Ondas de Agua",
      imagen: "assets/peinado7.jpeg"
    }
  ];

  videos: string[] = [
    'assets/video1.mp4',
    'assets/video2.mp4',
    'assets/video3.mp4',
    'assets/video4.mp4',
    'assets/video5.mp4',
    'assets/video6.mp4',
    'assets/video7.mp4',
    'assets/video8.mp4',
    'assets/video9.mp4',
    'assets/video10.mp4',
    'assets/video11.mp4',
    'assets/video12.mp4',
    'assets/video13.mp4'
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Verificar si la URL contiene un parámetro numérico (portafolio/{numero})
    const servicioId = this.route.snapshot.paramMap.get('id');
    
    // Si existe un id, abrir el modal
    if (servicioId) {
      this.servicioSeleccionado = this.album.find(item => item.id === +servicioId);
      this.isModalOpen = true;
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

    // Asegura que los videos estén silenciados y no permitan desmuteo
  const videos = document.querySelectorAll<HTMLVideoElement>('.video-item');
  videos.forEach(video => {
    video.muted = true;
    video.setAttribute('muted', 'true');
    video.setAttribute('playsinline', 'true'); // Asegura que no tenga reproducción automática con audio
    video.addEventListener('volumechange', () => {
      if (!video.muted) video.muted = true; // Forzar que siempre estén muteados
    });
  });
  }

  closeModal() {
    this.isModalOpen = false;
    this.router.navigate(['/portafolio']); // Redirige a la URL base de portafolio sin el id
  }
}
