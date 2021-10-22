import { Component, OnInit } from '@angular/core';
import { Comida } from '../entities/comida';
import { COMIDAS } from '../entities/comidas';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  platos = COMIDAS;
  platoElegido: Comida;

  constructor() {}
  ngOnInit(): void {}

  seleccionar(platoSeleccionado: Comida) {
    console.log(platoSeleccionado);
    this.platoElegido = platoSeleccionado;
  }
}
