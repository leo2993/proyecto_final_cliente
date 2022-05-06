import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SLibrosService {

  libros:Observable<Libro[]>=new Observable();
  constructor(private clienteHttp:HttpClient) {}
  getLibros(){
    console.log("Obteniendo datos JSON del WS");
    this.libros=this.clienteHttp.get<any[]>("http://localhost/libros");
    return this.libros;
  }
}
