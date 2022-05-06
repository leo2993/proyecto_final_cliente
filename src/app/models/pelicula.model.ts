export class Pelicula {
    id:number;
    titulo:string;
    sinopsis:string;
    actores:string;
    estreno:number;
    duracion:number;
    portada:string;
    trailer:string;
    enlace:string;
    constructor(id:number, titulo:string, sinopsis:string, actores:string, estreno:number, duracion:number, portada:string, trailer:string, enlace:string){
        this.id=id;
        this.titulo=titulo;
        this.sinopsis=sinopsis;
        this.actores=actores;
        this.estreno=estreno;
        this.duracion=duracion;
        this.portada=portada;
        this.trailer=trailer;
        this.enlace=enlace;
    }
}