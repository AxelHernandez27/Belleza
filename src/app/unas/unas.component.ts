import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-unas',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './unas.component.html',
  styleUrl: './unas.component.css',
})
export class UnasComponent {
  unas = [
    {
      id: 1,
      servicio: 'NAILS.LIST.ROUND.NAME',
      descripcion: 'NAILS.LIST.ROUND.DESCRIPTION',
      foto: 'assets/uñas/uñas20.jpeg',
    },
    {
      id: 2,
      servicio: 'NAILS.LIST.SQUARE.NAME',
      descripcion: 'NAILS.LIST.SQUARE.DESCRIPTION',
      foto: 'assets/uñas/uñas8.jpeg',
    },
    {
      id: 3,
      servicio: 'NAILS.LIST.OVAL.NAME',
      descripcion: 'NAILS.LIST.OVAL.DESCRIPTION',
      foto: 'assets/uñas/uñas21.jpeg',
    },
    {
      id: 4,
      servicio: 'NAILS.LIST.SQUOVAL.NAME',
      descripcion: 'NAILS.LIST.SQUOVAL.DESCRIPTION',
      foto: 'assets/uñas/uñas22.jpeg',
    },
    {
      id: 5,
      servicio: 'NAILS.LIST.ALMOND.NAME',
      descripcion: 'NAILS.LIST.ALMOND.DESCRIPTION',
      foto: 'assets/uñas/uñas17.jpeg',
    },
    {
      id: 6,
      servicio: 'NAILS.LIST.STILETTO.NAME',
      descripcion: 'NAILS.LIST.STILETTO.DESCRIPTION',
      foto: 'assets/uñas/uñas2.jpeg',
    },
    {
      id: 7,
      servicio: 'NAILS.LIST.BALLERINA.NAME',
      descripcion: 'NAILS.LIST.BALLERINA.DESCRIPTION',
      foto: 'assets/uñas/uñas7.jpeg',
    },
    {
      id: 8,
      servicio: 'NAILS.LIST.SEMIPERMANENT_GEL.NAME',
      descripcion: 'NAILS.LIST.SEMIPERMANENT_GEL.DESCRIPTION',
      foto: 'assets/uñas/uñas24.jpeg', 
    },
  ];
}
