import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PaisService } from '../../services/pais.service';

import { switchMap, tap } from 'rxjs/operators'

import { PaisResponse } from '../../interfaces/pais.interface';



@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: PaisResponse;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService   : PaisService
  ) { }

  ngOnInit() {

    // Forma corta para recibir solo 1 pais por id:
    this.activatedRoute.params
     .pipe(
       switchMap(({ id }) => this.paisService.getPaisId( id ))
     )
     .subscribe( resp => this.pais = resp );

    // Forma larga para recibir solo 1 pais por id:
    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {
    //     console.log( id );

    //     this.paisService.getPaisId( id )
    //       .subscribe( pais => {
    //         console.log( pais );
    //       })
    //   })

  }

}
