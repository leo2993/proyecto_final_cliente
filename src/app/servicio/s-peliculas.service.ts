import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SPeliculasService {
  peliculas:Observable<Pelicula[]>=new Observable();
  constructor(private clienteHttp:HttpClient) {}
  getPeliculas(){
    console.log("Obteniendo datos JSON del WS");
    this.peliculas=this.clienteHttp.get<any[]>("http://localhost/peliculas");
    return this.peliculas;
  }
}
