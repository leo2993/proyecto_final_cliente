export class Libro {
    id:number;
    titulo:string;
    portada:string;
    autor:string;
    enlace:string;
    constructor(id:number,titulo:string,portada:string,autor:string,enlace:string){
        this.id=id;
        this.titulo=titulo;
        this.portada=portada;
        this.autor=autor;
        this.enlace=enlace;
    }
}