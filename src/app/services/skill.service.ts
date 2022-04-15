import { Injectable } from '@angular/core';
import { Skill } from '../interfaces/skills.interface';
import { Interest, Aptitudes } from '../interfaces/interest_aptitud.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private _skills: Skill [] = [
    {
      title: 'Mobile Development',
      subtitle: 'Estoy desarrollando aplicaciones android y ios usando la plataforma flutter.',
      icons: [
        'flutter.png'
      ]
    },
    {
      title: 'Backend Development',
      subtitle: 'Estoy desarrollando aplicaciones backend usando spring boot, nodejs con buenos conocimientos en estos frameworks.',
      icons: [
        'node.png',
        'spring.png'
      ]
    },
    {
      title: 'FrontEnd Development',
      subtitle: 'Estoy desarrollando aplicaciones SPA usando Angular.',
      icons: [
        'angular.png'
      ]
    },
    {
      title: 'Data Base',
      subtitle: 'Uso dos tipos de base de datos',
      description: ['Sql: MySQL - PostgreSQL', ' No-Sql: MongoDB'],
      icons: [
        'postgresql.png',
        'mongodb.png'
      ]
    },
    {
      title: 'Version Control System',
      subtitle: 'Uso git para el control de versiones de mi código, además uso GitHub y GitLab para el alojaminto de código remoto.',
      icons: [
        'git.png',
        'github.png',
      ]
    }
  ];
  private _interests: Interest [] = [
    {
      name: 'Fútbol'
    },
    {
      name: 'Ver películas'
    },
    {
      name: 'Escuchar música'
    },
    {
      name: 'Matemáticas'
    },
    {
      name: 'Pescar'
    },
    {
      name: 'Viajar'
    },
  ];

  private _aptitudes: Aptitudes [] = [
    {
      name: 'Me apasiona el código'
    },
    {
      name: 'Full Stack'
    },
    {
      name: 'Rápido aprendizaje'
    },
    {
      name: 'Capacidad de adaptación'
    },
    {
      name: 'Proactivo'
    },
    {
      name: 'Perseverante'
    },
    {
      name: 'Trabajo en equipo'
    },
    {
      name: 'Inglés: medio-alto'
    },
  ];

  get skills(){
    return [...this._skills];
  }
  get interests(){
    return [...this._interests];
  }
  get aptitudes(){
    return [...this._aptitudes];
  }
  constructor() { }

}
