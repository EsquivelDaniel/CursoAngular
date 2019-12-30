import {Component} from '@angular/core';

@Component ({
    selector: 'videojuegos',
    template: `
        <h2> Componente de {{ nombre }} </h2>
        <h3> El mejor juego es: {{ mejorJuego }} </h3>
        `
})

export class VideojuegosComponent{
    nombre = 'Videojuegos 2019';
    mejorJuego = 'GTA Vice City';
}