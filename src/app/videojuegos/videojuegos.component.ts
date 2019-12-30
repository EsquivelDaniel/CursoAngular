import {Component} from '@angular/core';

@Component ({
    selector: 'videojuegos',
    templateUrl: './videojuegos.component.html'
})

export class VideojuegosComponent{
    nombre = 'Videojuegos 2019';
    mejorJuego = 'GTA Vice City';
    mejorJuegoRetro = 'Super Mario';
    mostrarRetro = true;
    color = "blue";
    alineacion = "center";

    videojuegos = [
        'Assasins creed',
        'GTA Vice City',
        'Call of Duty',
        'Counter Strike'
    ];
}