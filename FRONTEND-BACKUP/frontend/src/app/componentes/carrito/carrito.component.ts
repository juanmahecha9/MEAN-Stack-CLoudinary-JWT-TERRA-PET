import { Component, OnInit } from '@angular/core';
import { carrito } from '../../models/carrito';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  public Carrito: carrito;
  public animalesEncontrados: any=[];

  constructor(private service: CarritoService) {
    this.Carrito = new carrito();
  }

  ngOnInit(): void {
    this.mostrarAnimales();
  }

  formularioUp() {
    this.service.agregarAnimal(this.Carrito).subscribe((res: any) => {
      if (res.statusCode !== 200) {
        alert('Error al crear el animal');
      } else {
        alert('Animal agregado correctamente');
      }
    });
  }

  mostrarAnimales() {
      this.service.obtenerAnimal().subscribe((response: any) => {
        this.animalesEncontrados = response.carrito;
      },
      (error) => {
        const errorMensaje = <any>error;

        if (errorMensaje != null) {
          console.log('Error:' + error);
        }
      }
    );
  }
}
