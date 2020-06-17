import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
/* 
import { PhotoService } from '../../services/photo.service'
import { Photo } from '../../interfaces/Photo'
//import {productoService } from '../../services/producto.service'
import {AuthService } from '../../services/auth.service'
import {producto } from '../../models/producto' */

import { ProdService} from '../../services/prod.service'
import { producto } from '../../models/producto';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {
  public Producto: producto;
  public productosEncontrados: any = []; /* los datos encontrados los va a guardar en un array */


  constructor(
    private service: ProdService
    
  ) { this.Producto = new producto(); }

  ngOnInit() {
    this.mostrarProducto()
  }
/* Crear el metodo */
mostrarProducto() {
  /* Nos suscribimos al servicio que creamos y se le indica que nos devuelva una respuesta cualquiera según el caso */
  this.service.showData().subscribe((response: any) => {
    this.productosEncontrados = response.producto;
    /* el contador for nos muestra como respuesta cada producto */
  },
    (error) => {
      var errormensaje = <any>error;
      /* el error se guarda en una variable para luego comparla y mostrarla */
      if (errormensaje != null) {
        console.log(error);
        /* si el error es diferente a null, que muestre el error en la consola del navegador */
      }
    }
  )
}
  
  actualizar() {
    alert('Gracias por participar en este proceso de adopcion \n Poximamente nos pondremos en contacto contigo para poder \n continuar el proceso de se favorable tu solicitud \n  🐶🐱 🐶🐱 🐶🐱 🐶🐱')
    
  }
 

 
}
