import {Component} from '@angular/core';

@Component ({
    selector: 'videojuegos',
    templateUrl: './videojuegos.component.html'
})

export class VideojuegosComponent{
    nombre:string;
    mejorJuego:string;
    mejorJuegoRetro:string;
    mostrarRetro:boolean;
    color:string;
    alineacion:string;
    year:number;
    videojuegos:Array<string>;
    
    constructor() {
        this.nombre = 'Videojuegos 2019';
        this.mejorJuego = 'GTA Vice City';
        this.mejorJuegoRetro = 'Super Mario';
        this.mostrarRetro = true;
        this.color = "blue";
        this.alineacion = "center";
        this.year = 2019;
        this.videojuegos = [
            'Assasins creed',
            'GTA Vice City',
            'Call of Duty',
            'Counter Strike'
        ];
    }
}