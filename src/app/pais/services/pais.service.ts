import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PaisResponse } from '../interfaces/pais.interface';



@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams() {
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<PaisResponse[]> {
    
    const url = `${ this._apiUrl }/name/${ termino }`;
    return this.http.get<PaisResponse[]>( url, { params: this.httpParams } );

  }

  buscarCapital( termino: string ): Observable<PaisResponse[]> {
    
    const url = `${ this._apiUrl }/capital/${ termino }`;
    return this.http.get<PaisResponse[]>( url, { params: this.httpParams } );

  }

  getPaisId( id: string ): Observable<PaisResponse> {
    
    const url = `${ this._apiUrl }/alpha/${ id }`;
    return this.http.get<PaisResponse>( url );

  }

  buscarRegion( region: string ): Observable<PaisResponse[]> {
    
    const url = `${ this._apiUrl }/region/${ region }`;
    return this.http.get<PaisResponse[]>( url, { params: this.httpParams } );

  }

}

