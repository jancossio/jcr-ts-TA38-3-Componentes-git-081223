import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import { NgModule } from '@angular/core';

import { Articulo } from '../models/articulo';

@Component({
  selector: 'app-tabla-articulos',
  standalone: true,
  imports: [],
  templateUrl: './tabla-articulos.component.html',
  styleUrl: './tabla-articulos.component.css'
})
export class TablaArticulosComponent {

  private editarArticuloSubject = new Subject<any>();  

  constructor(){};

  @Input() datos:any;

  @Output() onSeleccionar: EventEmitter<Articulo> = new EventEmitter<Articulo>();

  ngOnInit():void{
  }

  articulos = [{codigo:1, descripcion:'papas', precio:10.55},
                {codigo:2, descripcion:'manzanas', precio:12.10},
                {codigo:3, descripcion:'melones', precio:52.30},
                {codigo:4, descripcion:'cebollas', precio:17},
                {codigo:5, descripcion:'calabazas', precio:20},];


  agregarDatos(inRow: Articulo){
    console.log('Recibido');
    console.log(inRow);
    this.articulos.push(inRow);
  }

  actualizarDatos(actualizado: Articulo){
    console.log('Recibido');
    const index = this.articulos.findIndex(articulo => articulo.codigo === actualizado.codigo);
    this.articulos[index] = actualizado;
  }

  eliminar(codArticulo:number){
    console.log('Eliminado');
    const index = this.articulos.findIndex(articulo => articulo.codigo === codArticulo);
    this.articulos.splice(index,1);
  }

  seleccionar(codArticulo:number){
    console.log('Seleccionado');
    const index = this.articulos.findIndex(articulo => articulo.codigo === codArticulo);
    this.onSeleccionar.emit(this.articulos[index]);
  }
}
