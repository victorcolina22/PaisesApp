import { Component, Input } from '@angular/core';

import { PaisResponse } from '../../interfaces/pais.interface';



@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styles: [
  ]
})
export class PaisTableComponent {

  @Input() paises: PaisResponse[] = [];

  constructor() { }

}
