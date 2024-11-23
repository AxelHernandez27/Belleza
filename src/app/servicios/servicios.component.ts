import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

  servicios = [
    { 
      id: 1,
      servicio: "Maquillaje Social de Día",
      descripcion: "Maquillaje suave en tonos cálidos y rosados. Buscamos resaltar tu belleza natural, ideal para tu día a día.",
      foto:"assets/socialDiaD.jpeg" 
    },
    { 
      id: 2,
      servicio: "Maquillaje Social de Noche",
      descripcion: "Maquillaje en tonos cálidos degradados, iluminación y un toque de brillo para agrandar visualmente la mirada, buscamos generar intensidad y luminosidad respetando la colorimetria de tu piel.",
      foto:"assets/socialNocheD.jpeg" 
    },
    { 
      id: 3,
      servicio: "Maquillaje Smokey Eyes",
      descripcion: "Maquillaje en tonos cafes y oscuros ahumados, con un toque de glitter de color, buscamos realzar la mirada haciéndola lucir profunda, atractiva y llamativa.",
      foto:"assets/smokeeyes.jpeg" 
    },
    { 
      id: 4,
      servicio: "Maquillaje Piel Madura con Hilos Tensores",
      descripcion: "Maquillaje en tonos degradados y con iluminación, buscamos realzar la belleza natural sin acentuar las líneas de expresión, agregando de manera opcional hilos tensores que yudan a atenuar arrugas, dar soporte y mejorar la textura de la piel para una mejor apariencia.",
      foto:"assets/pielMaduraHilosTensoresD.jpeg" 
    },
    { 
      id: 5,
      servicio: "Maquillaje de XV Años",
      descripcion: "Maquillaje en tonos neutros o glam con color, brillo y delineados, buscamos realizar un maquillaje especial y completamente personalizado, donde se realze la belleza natural de la quinceañera sin recargarla demasiado, haciéndola lucir saludable y juvenil.",
      foto:"assets/despuesXV.jpeg" 
    },
    { 
      id: 6,
      servicio: "Maquillaje Nupcial de Día",
      descripcion: "Maquillaje elegante y luminoso en tonalidades neutras, cafes, beige y rosados, buscamos realzar los rasgos de la novia adaptándonos al tipo de ceremonia y siendo fieles a su estilo, haciéndola lucir radiante y cómoda.",
      foto:"assets/nupcialDiaDespues.jpeg" 
    },
    { 
      id: 7,
      servicio: "Maquillaje Nupcial de Noche",
      descripcion: "Maquillaje elegante y sofisticado en tonalidades neutras, cafes, rosados y con sombras satinadas o brillo,  buscamos realzar los rasgos de la novia adaptándonos al tipo de ceremonia y siendo fieles a su estilo, haciéndola lucir radiante y cómoda.",
      foto:"assets/nupcialNochedespues.jpeg" 
    },
    { 
      id: 8,
      servicio: "Maquillaje Full Color",
      descripcion: "Maquillaje vibrante y colorido, adaptado para eventos especiales, fotografías o para el día a día, buscamos hacer resaltar labios y la mirada principalmente para hacerte lucir un rostro luminoso, vibrante y lleno de vida.",
      foto:"assets/fullcolorDespues.jpeg" 
    },
    { 
      id: 9,
      servicio: "Maquillaje Editorial",
      descripcion: "Maquillaje creativo y abierto a la inspiración, con delineados gráficos, colores, brillo o glitter, buscamos realizar lo que la clienta o egencia solicite, este maquillaje lo realizamos para revistas, publicidad, pasarelas y redes sociales.",
      foto:"assets/editorialDespues.jpeg" 
    }
  ]

  constructor(private router: Router) {}

  irAlPortafolio(servicioId: number) {
    this.router.navigate(['/portafolio', servicioId]);
  }
}
