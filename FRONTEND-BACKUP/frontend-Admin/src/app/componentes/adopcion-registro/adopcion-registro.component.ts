import { Component, OnInit } from '@angular/core';
import { producto } from '../../models/adopcion';
/* importar el modelo para que tenga acceso a el */
//import {productoService } from '../../services/adopcion.service'
import {RegistroService } from '../../services/registro.service'
@Component({
  selector: 'app-adopcion-registro',
  templateUrl: './adopcion-registro.component.html',
  styleUrls: ['./adopcion-registro.component.css']
})
export class AdopcionRegistroComponent implements OnInit {

  public Producto: producto;
  public productosEncontrados: any = []; /* los datos encontrados los va a guardar en un array */


/* private service: productoService */
  constructor( private service: RegistroService ){
    this.Producto = new producto();
  }

  ngOnInit(){
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
          alert('Datos actualizados del solicitante.')
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

  eliminarProductos(productoid) {
    this.service.eliminarProducto(productoid).subscribe((response: any) => {
      if (response.producto) {
        alert("Proceso rechazado.")
        this.mostrarProducto()
      } else {
        alert("Error.")
      }
    }, error => {
      if (error != null) {
        console.log(error)
      }
    })
  }
  

}
