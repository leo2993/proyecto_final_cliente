import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titular',
  templateUrl: './titular.component.html',
  styleUrls: ['./titular.component.css']
})
export class TitularComponent implements OnInit {
  @Input() titular:string='Sin datos obtenidos de Titulo';
  constructor() { 
  }

  ngOnInit(): void {
  }

}
