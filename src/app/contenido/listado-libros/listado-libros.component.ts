import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro.model';
import { SLibrosService } from 'src/app/servicio/s-libros.service';

@Component({
  selector: 'app-listado-libros',
  templateUrl: './listado-libros.component.html',
  styleUrls: ['./listado-libros.component.css']
})
export class ListadoLibrosComponent implements OnInit {

  libros:Libro[] = new Array<Libro>();
  constructor(private servicioLibros:SLibrosService) {}

  ngOnInit(): void {
    this.servicioLibros.getLibros().subscribe(
      libros=> {
        this.libros=libros;
      }
    )
  }

}
