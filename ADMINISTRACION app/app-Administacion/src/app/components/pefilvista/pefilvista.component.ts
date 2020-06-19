import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import {DataService} from '../../servicios/data.service'
import {producto} from '../../models/imagen'
@Component({
  selector: 'app-pefilvista',
  templateUrl: './pefilvista.component.html',
  styleUrls: ['./pefilvista.component.css']
})
export class PefilvistaComponent implements OnInit {
  public Producto: producto;
  public productosEncontrados: any = []; /* los datos encontrados los va a guardar en un array */

  /* guardamos el modelo en una variable publica, para poder entrar a sus caracteristicas */

  /* se hace una variable privada para que no todos tengan acceso a la informacion */
  constructor(private service:DataService) {
    /* crear el modelo del producto para que se limpie cada dato */
    this.Producto = new producto(); /* cada que se crea un producto, se crean nuevos modelos paa que no se sobreescribam los datos */

  }

  ngOnInit(): void {
    /* Se invocara o cargara todos los metodos que queremos que se cargen a la vista sin necesidad de requerir eventos */
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
  /* funcion del formulario para editar */
  editar(producto) {
    this.service.upgradeData(producto._id, producto).subscribe(
      (response: any) => {
        if (response.producto) {
          alert('Data actualizada.')
          this.mostrarProducto(); /* Mostrar el producto cuando se halla actualizado */
        } else {
          alert('Error.')
        }
      }, (error) => {
        if (error != null) {
          console.log(error);
        }
      }
    );
  }

  eliminarProductos(productoid){
    this.service.eliminarProducto(productoid).subscribe((response:any)=>{
      if(response.producto){
        alert("Peludo bajado de la base de datos")
       this.mostrarProducto()
      }else{
        alert("Peludo no se pudo eliminar")
      }},error=>{
        if(error != null){
          console.log(error )
        }
      })}

      
  

}
