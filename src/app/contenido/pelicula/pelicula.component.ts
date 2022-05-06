import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula.model';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  @Input() pelicula:Pelicula = new Pelicula(0,"","","",0,0,"","","");
  constructor() { }

  ngOnInit(): void {
  }

}
