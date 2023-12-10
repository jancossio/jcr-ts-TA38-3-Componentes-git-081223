import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { InputTablaComponent } from "./input-tabla/input-tabla.component";
import { TablaArticulosComponent } from "./tabla-articulos/tabla-articulos.component";

import { Articulo } from './models/articulo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputTablaComponent, TablaArticulosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jcr-ts-TA38-3-Componentes-git-081223';

  @ViewChild(TablaArticulosComponent, {static : true}) tablaArticulos: TablaArticulosComponent | undefined;
  @ViewChild(InputTablaComponent, {static : true}) formularioArticulo: InputTablaComponent | undefined;

  ngOnInit() {
  }

  agregarArticulo(formData: Articulo){
    console.log("Pasa por aqui",formData);
    this.tablaArticulos?.agregarDatos(formData);
  }

  modificarArticulo(formData: Articulo){
    console.log("Pasa por aqui",formData);
    this.tablaArticulos?.actualizarDatos(formData);
  }

  seleccionarArticulo(formData: Articulo){
    console.log("Pasa por aqui",formData);
    this.formularioArticulo?.recibirDatos(formData);
  }
}
