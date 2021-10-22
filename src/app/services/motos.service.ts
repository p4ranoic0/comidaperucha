import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MotosService {
  constructor(private http: HttpClient) {}
  motosSelect() {
    const ruta = 'https://comidasperuchas.000webhostapp.com/php/moto.php';
    return this.http.get(ruta);
  }

  motosInsert(marca, modelo, anio, peso, kilometraje, potencia) {
    const ruta = 'https://comidasperuchas.000webhostapp.com/php/insertarmoto.php';
    const formData: FormData = new FormData();
    formData.append('marca', marca);
    formData.append('modelo', modelo);
    formData.append('año', anio);
    formData.append('peso', peso);
    formData.append('kilometraje', kilometraje);
    formData.append('potencia', potencia);

    return this.http.post(ruta, formData).pipe(
      map((res) => {
        return res;
      })
    );
  }

  motosUpdate(id, marca,modelo, anio, peso, kilometraje, potencia) {
    const ruta = 'https://comidasperuchas.000webhostapp.com/php/actulizarmoto.php';
    const formData: FormData = new FormData();

    formData.append('id', id);
    formData.append('marca', marca);
    formData.append('modelo', modelo);
    formData.append('año', anio);
    formData.append('peso', peso);
    formData.append('kilometraje', kilometraje);
    formData.append('potencia', potencia);

    return this.http.post(ruta, formData);
  }

  motosDelete(id) {
    const ruta = 'https://comidasperuchas.000webhostapp.com/php/eliminarmoto.php';
    const formData: FormData = new FormData();
    formData.append('id', id);

    return this.http.post(ruta, formData);
  }
}
