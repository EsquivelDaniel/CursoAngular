import {Component} from '@angular/core';

@Component ({
    selector: 'videojuegos',
    template: `
        <h2> Componente de {{ nombre }} </h2>

        <h3 *ngIf = "mostrarRetro != true"> El mejor juego es: {{ mejorJuego }} </h3>

        <h3 [style.background] = "color"
            [style.text-align] = "alineacion"
            *ngIf = "mostrarRetro"> 
            El mejor juego es: {{ mejorJuegoRetro }}
        </h3>

        <h2>Listado de Videojuegos</h2>
        <ul>
            <li
                *ngFor = "let game of videojuegos">{{ game }}
            </li>
        </ul>
        `
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