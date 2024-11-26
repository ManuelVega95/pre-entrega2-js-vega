export class Clubes { // exportamos la clase Clubes para los archivos de js en los que quisiéramos usarla.
    constructor (club = "", ubicacion = "", categoria = ""){
        this.club = club;
        this.ubicacion = ubicacion;
        this.categoria = categoria
    }
}