import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';

import { PaisResponse } from '../../interfaces/pais.interface';




@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li  {
      cursor: pointer;
    }
  `
  ]
})
export class PorPaisComponent {

  termino           : string = '';
  hayError          : boolean = false;
  paises            : PaisResponse[] = []
  paisesSugeridos   : PaisResponse[] = []
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ){

    this.hayError = false;
    this.mostrarSugerencias = false;
    this.termino = termino;
    if( this.termino.trim().length == 0 ) return;
    
    this.paisService.buscarPais( this.termino )
      .subscribe(( paises ) => {

        this.paises = paises;

      }, (err) => {
        
        this.hayError = true;
        this.paises = [];
        console.error( err );
        
      });

  }

  sugerencia( termino: string ) {

    this.hayError = false;
    this.mostrarSugerencias = true;
    this.termino = termino;

    this.paisService.buscarPais( termino )
      .subscribe( 
        paises => this.paisesSugeridos = paises.splice(0,5),
        (err) => this.paisesSugeridos = []
      );

  }

  buscarSugerido( termino: string ) {
    this.buscar( termino );
  }

}
