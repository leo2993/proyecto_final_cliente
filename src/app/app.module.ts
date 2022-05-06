import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera/cabecera.component';
import { PieComponent } from './pie/pie/pie.component';
import { ListadoPeliculasComponent } from './contenido/listado-peliculas/listado-peliculas.component';
import { PeliculaComponent } from './contenido/pelicula/pelicula.component';
import { HttpClientModule } from '@angular/common/http';
import { TitularComponent } from './componentes/titular/titular.component';
import { ListadoLibrosComponent } from './contenido/listado-libros/listado-libros.component';
import { LibroComponent } from './contenido/libro/libro.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    ListadoPeliculasComponent,
    PeliculaComponent,
    TitularComponent,
    ListadoLibrosComponent,
    LibroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
