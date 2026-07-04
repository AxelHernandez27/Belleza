import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

  servicios = [
  {
    id: 1,
    servicio: 'SERVICES.LIST.SOCIAL_DAY.NAME',
    descripcion: 'SERVICES.LIST.SOCIAL_DAY.DESCRIPTION',
    foto: 'assets/socialDiaD.jpeg'
  },
  {
    id: 2,
    servicio: 'SERVICES.LIST.SOCIAL_NIGHT.NAME',
    descripcion: 'SERVICES.LIST.SOCIAL_NIGHT.DESCRIPTION',
    foto: 'assets/socialNocheD.jpeg'
  },
  {
    id: 3,
    servicio: 'SERVICES.LIST.SMOKEY.NAME',
    descripcion: 'SERVICES.LIST.SMOKEY.DESCRIPTION',
    foto: 'assets/smokeeyes.jpeg'
  },
  {
    id: 4,
    servicio: 'SERVICES.LIST.MATURE.NAME',
    descripcion: 'SERVICES.LIST.MATURE.DESCRIPTION',
    foto: 'assets/pielMaduraHilosTensoresD.jpeg'
  },
  {
    id: 5,
    servicio: 'SERVICES.LIST.XV.NAME',
    descripcion: 'SERVICES.LIST.XV.DESCRIPTION',
    foto: 'assets/despuesXV.jpeg'
  },
  {
    id: 6,
    servicio: 'SERVICES.LIST.BRIDAL_DAY.NAME',
    descripcion: 'SERVICES.LIST.BRIDAL_DAY.DESCRIPTION',
    foto: 'assets/nupcialDiaDespues.jpeg'
  },
  {
    id: 7,
    servicio: 'SERVICES.LIST.BRIDAL_NIGHT.NAME',
    descripcion: 'SERVICES.LIST.BRIDAL_NIGHT.DESCRIPTION',
    foto: 'assets/nupcialNochedespues.jpeg'
  },
  {
    id: 8,
    servicio: 'SERVICES.LIST.FULL_COLOR.NAME',
    descripcion: 'SERVICES.LIST.FULL_COLOR.DESCRIPTION',
    foto: 'assets/fullcolorDespues.jpeg'
  },
  {
    id: 9,
    servicio: 'SERVICES.LIST.EDITORIAL.NAME',
    descripcion: 'SERVICES.LIST.EDITORIAL.DESCRIPTION',
    foto: 'assets/editorialDespues.jpeg'
  }
];

  constructor(private router: Router) {}

  irAlPortafolio(servicioId: number) {
    this.router.navigate(['/portafolio', servicioId]);
  }
}
