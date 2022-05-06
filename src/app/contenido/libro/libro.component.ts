import { Component, Input, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro.model';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  @Input() libro:Libro = new Libro(0,"","","","");
  constructor() { }

  ngOnInit(): void {
  }

}
