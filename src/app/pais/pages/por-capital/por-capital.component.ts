import { Component } from '@angular/core';

import { PaisResponse } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';



@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [`
    li {
      cursor: pointer;
    }  
  `
  ]
})
export class PorCapitalComponent {

  termino           : string = '';
  hayError          : boolean = false;
  capitales         : PaisResponse[] = []
  capitalesSugeridas: PaisResponse[] = []
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ){

    this.hayError = false;
    this.mostrarSugerencias = false;
    this.termino = termino;
    if( this.termino.trim().length == 0 ) return;
    console.log( this.termino );
    
    this.paisService.buscarCapital( this.termino )
      .subscribe(( capitales ) => {

        this.capitales = capitales;
        console.log( capitales );

      }, (err) => {
        
        this.hayError = true;
        this.capitales = [];
        console.error( err );
        
      });

  }

  sugerencia( termino: string ) {
    this.hayError = false;
    this.mostrarSugerencias = true;
    this.termino = termino

    this.paisService.buscarCapital( termino )
      .subscribe( 
        capitales => this.capitalesSugeridas = capitales.splice(0,5),
        (err) => this.capitalesSugeridas = []
      );
  }

  buscarSugerido( termino: string ){
    this.buscar( termino );
  }

}
