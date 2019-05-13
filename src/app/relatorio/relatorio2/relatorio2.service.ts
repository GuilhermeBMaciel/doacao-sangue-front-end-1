import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { Relatorio1 } from './relatorio2';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Relatorio2Service {

  private readonly API = `${environment.API}produto`;
  //private readonly API = 'http://localhost:3000/produto'

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get<Relatorio2[]>(this.API).
    pipe(
      tap(console.log) //para debugar, ver os erros
    );
  }
  
}
