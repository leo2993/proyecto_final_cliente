import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula.model';
import { SPeliculasService } from 'src/app/servicio/s-peliculas.service';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {
  peliculas:Pelicula[] = new Array<Pelicula>();
  constructor(private servicioPeliculas:SPeliculasService) {
  }

  ngOnInit(): void {
    this.servicioPeliculas.getPeliculas().subscribe(
      peliculas=> {
        this.peliculas=peliculas;
      }
    )
  }

}
