import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pestanas',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './pestanas.component.html',
  styleUrl: './pestanas.component.css',
})
export class PestanasComponent {
  constructor(public translate: TranslateService) {}

  get guiaImagen(): string {
    const idioma = this.translate.currentLang || this.translate.defaultLang;

    return idioma === 'en'
      ? 'assets/pestañas/guide-lashes-en.png'
      : 'assets/pestañas/guia-pestanas.png';
  }

  estilosPeloAPelo = [
  {
    nombre: 'LASHES.MAPPING.CLASSIC.NAME',
    descripcion: 'LASHES.MAPPING.CLASSIC.DESCRIPTION',
    foto: 'assets/pestañas/pestaña12.jpeg'
  },
  {
    nombre: 'LASHES.MAPPING.WET_EFFECT.NAME',
    descripcion: 'LASHES.MAPPING.WET_EFFECT.DESCRIPTION',
    foto: 'assets/pestañas/pestaña18.jpeg'
  },
  {
    nombre: 'LASHES.MAPPING.HAWAIIAN_VOLUME.NAME',
    descripcion: 'LASHES.MAPPING.HAWAIIAN_VOLUME.DESCRIPTION',
    foto: 'assets/pestañas/pestaña5.jpeg'
  },
  {
    nombre: 'LASHES.MAPPING.VOLUME.NAME',
    descripcion: 'LASHES.MAPPING.VOLUME.DESCRIPTION',
    foto: 'assets/pestañas/pestaña4.jpeg'
  },
  {
    nombre: 'LASHES.MAPPING.HYBRID.NAME',
    descripcion: 'LASHES.MAPPING.HYBRID.DESCRIPTION',
    foto: 'assets/pestañas/pestaña6.jpeg'
  }
];

  pestanas = [
    {
      id: 1,
      servicio: 'LASHES.LIST.CLASSIC.NAME',
      descripcion: 'LASHES.LIST.CLASSIC.DESCRIPTION',
      foto: 'assets/pestañas/pestaña18.jpeg',
    },
    {
      id: 2,
      servicio: 'LASHES.LIST.HYBRID.NAME',
      descripcion: 'LASHES.LIST.HYBRID.DESCRIPTION',
      foto: 'assets/pestañas/pestaña6.jpeg',
    },
    {
      id: 3,
      servicio: 'LASHES.LIST.VOLUME_3D.NAME',
      descripcion: 'LASHES.LIST.VOLUME_3D.DESCRIPTION',
      foto: 'assets/pestañas/pestaña4.jpeg',
    },
    {
      id: 4,
      servicio: 'LASHES.LIST.HAWAIIAN_VOLUME.NAME',
      descripcion: 'LASHES.LIST.HAWAIIAN_VOLUME.DESCRIPTION',
      foto: 'assets/pestañas/pestaña5.jpeg',
    },
    {
      id: 5,
      servicio: 'LASHES.LIST.MEGA_VOLUME.NAME',
      descripcion: 'LASHES.LIST.MEGA_VOLUME.DESCRIPTION',
      foto: 'assets/pestañas/pestaña7.jpeg',
    },
    {
      id: 6,
      servicio: 'LASHES.LIST.VOLUME_WISPY.NAME',
      descripcion: 'LASHES.LIST.VOLUME_WISPY.DESCRIPTION',
      foto: 'assets/pestañas/pestaña8.jpeg',
    },
    {
      id: 7,
      servicio: 'LASHES.LIST.CLASSIC_MASCARA.NAME',
      descripcion: 'LASHES.LIST.CLASSIC_MASCARA.DESCRIPTION',
      foto: 'assets/pestañas/pestaña9.jpeg',
    },
    {
      id: 8,
      servicio: 'LASHES.LIST.CLASSIC_1X1.NAME',
      descripcion: 'LASHES.LIST.CLASSIC_1X1.DESCRIPTION',
      foto: 'assets/pestañas/pestaña14.jpeg',
    },
    {
      id: 9,
      servicio: 'LASHES.LIST.NATURAL_EFFECT.NAME',
      descripcion: 'LASHES.LIST.NATURAL_EFFECT.DESCRIPTION',
      foto: 'assets/pestañas/pestaña20.jpeg',
    },
    {
      id: 10,
      servicio: 'LASHES.LIST.SQUIRREL_EFFECT.NAME',
      descripcion: 'LASHES.LIST.SQUIRREL_EFFECT.DESCRIPTION',
      foto: 'assets/pestañas/pestaña15.jpeg',
    },
    {
      id: 11,
      servicio: 'LASHES.LIST.CAT_EYE.NAME',
      descripcion: 'LASHES.LIST.CAT_EYE.DESCRIPTION',
      foto: 'assets/pestañas/pestaña19.jpeg',
    },
    {
      id: 12,
      servicio: 'LASHES.LIST.DOLL_EYE.NAME',
      descripcion: 'LASHES.LIST.DOLL_EYE.DESCRIPTION',
      foto: 'assets/pestañas/pestaña3.jpeg',
    },
  ];
}
