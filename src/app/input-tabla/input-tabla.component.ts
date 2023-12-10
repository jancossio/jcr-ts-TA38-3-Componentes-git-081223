import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Articulo } from '../models/articulo';


@Component({
  selector: 'app-input-tabla',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input-tabla.component.html',
  styleUrl: './input-tabla.component.css'
})
export class InputTablaComponent {

  constructor() {}

  @Output() onAlmacenar: EventEmitter<Articulo> = new EventEmitter<Articulo>();

  @Output() onActualizar: EventEmitter<Articulo> = new EventEmitter<Articulo>();

  @ViewChild("formCode")
  formCode!: ElementRef;

  @ViewChild("formDescription")
  formDescription!: ElementRef;

  @ViewChild("formPrice")
  formPrice!: ElementRef;

  GrupoForm = new FormGroup({
    codigo: new FormControl(''),
    descripcion: new FormControl(''),
    precio: new FormControl('')
  });

  enviar = (): void => {
    console.log('Enviado');
      let formData: Articulo = new Articulo(0,'',0);
      formData.codigo = parseInt(this.GrupoForm.value.codigo!);
      formData.descripcion = (this.GrupoForm.value.descripcion!);
      formData.precio = parseFloat(this.GrupoForm.value.precio!);
      this.onAlmacenar.emit(formData);
      this.GrupoForm.reset();
  }

  modificar = (): void => {
    console.log('Enviado');
    let formData: Articulo = new Articulo(0,'',0);
    formData.codigo = parseInt(this.GrupoForm.value.codigo!);
    formData.descripcion = (this.GrupoForm.value.descripcion!);
    formData.precio = parseFloat(this.GrupoForm.value.precio!);
    this.onActualizar.emit(formData);
    this.GrupoForm.reset();
  }

  recibirDatos(articulo: Articulo){
    console.log('Llega por aqui',articulo.descripcion);
    this.formCode.nativeElement.value = articulo.codigo.toString();
    this.formDescription.nativeElement.value = articulo.descripcion;
    this.formPrice.nativeElement.value = articulo.precio.toString();
  }
}
