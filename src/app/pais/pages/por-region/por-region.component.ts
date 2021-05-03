import { Component, Input } from '@angular/core';

import { PaisService } from '../../services/pais.service';

import { PaisResponse } from '../../interfaces/pais.interface';



@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones    : string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';
  paises: PaisResponse[] = [];

  constructor( private paisService: PaisService ) { }

  getClaseCSS( region: string ) {
    return ( region === this.regionActiva ) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activarRegion( region: string ){

    if( region === this.regionActiva ) return;

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion( region )
      .subscribe( resp => this.paises = resp );
  }

}

