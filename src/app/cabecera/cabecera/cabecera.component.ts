import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.play();
  }

  play() {
    var src = '../assets/sounds/theme.mp3';
    var audio = new Audio(src);
    audio.volume = 0.5;
    audio.muted = true; //Arreglo rapido de fallo en reproducción DOM err
    audio.muted = false;
    audio.play();
  }
}
