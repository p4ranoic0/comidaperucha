import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Motos } from '../entities/moto';
import { MotosService } from '../services/motos.service';

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.css'],
})
export class MotosComponent implements OnInit {
  listaMotos: Motos[];
  motosAgregarForm = new FormGroup({
    marca: new FormControl(),
    modelo: new FormControl(),
    anio: new FormControl(),
    peso: new FormControl(),
    kilometraje: new FormControl(),
    potencia: new FormControl()
    
  });

  nuevoMoto: any = {};
  faEdit = faEdit;
  faTimes = faTimes;

  motosActualizar: Motos;
  motosActualizarForm = new FormGroup({
    id: new FormControl(),
    marca: new FormControl(),
    modelo: new FormControl(),
    anio: new FormControl(),
    peso: new FormControl(),
    kilometraje: new FormControl(),
    potencia: new FormControl()
  });

  constructor(private motosService: MotosService) {}

  ngOnInit(): void {
    this.motosService.motosSelect().subscribe((res: Motos[]) => {
      this.listaMotos = res;
      console.log(res);
    });
  }

  agregarMotos(values) {
    this.motosService
      .motosInsert(
        values.marca,
        values.modelo,
        values.anio,
        values.peso,
        values.kilometraje,
        values.potencia
      )
      .subscribe((res) => {
        this.nuevoMoto = {
          marca: values.marca,
        };
      });
  }

  editarMotos(filaMotos: Motos) {
    console.log(filaMotos);
    this.motosActualizar = filaMotos;
  }

  actualizarMotos(values) {
    this.motosService
      .motosUpdate(
        values.id,
        values.marca,
        values.modelo,
        values.anio,
        values.peso,
        values.kilometraje,
        values.potencia
      )
      .subscribe();
    document.getElementById('botonCerrar').click();
  }

  eliminarMotos(filaMotos: Motos) {
    var respuesta = confirm(
      'Esta seguro que desea eliminar ' + filaMotos.marca + ' ?'
    );
    if (respuesta === true) {
      this.motosService.motosDelete(filaMotos.id).subscribe();
      this.listaMotos = this.listaMotos.filter(
        (item) => item.id !== filaMotos.id
      );
      alert('Se ha eliminado la categoria: ' + filaMotos.marca);
    }
  }
}
