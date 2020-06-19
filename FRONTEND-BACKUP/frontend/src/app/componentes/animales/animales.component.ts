import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { PhotoService } from '../../services/photo.service'
import { Photo } from '../../interfaces/Photo'
// {productoService } from '../../services/producto.service'
import {AuthService } from '../../services/auth.service'
import {producto } from '../../models/producto'
@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss']
})
export class AnimalesComponent implements OnInit {

  public Producto: producto;
  public productosEncontrados: any = []; /* los datos encontrados los va a guardar en un array */
user={};
  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private router: Router,
    //private service: productoService,
    private authService: AuthService
    
  ) { this.Producto = new producto(); }

  ngOnInit() {
    this.photoService.getPhotos()
      .subscribe(
        res => {
          this.photos = res;
        },
        err => console.log(err)
      )
  }

  selectedCard(id: string) {
    this.router.navigate(['/photos', id]);
  }

  actualizar() {
    alert('Gracias por participar en este proceso de adopcion \n Poximamente nos pondremos en contacto contigo para poder \n continuar el proceso de se favorable tu solicitud \n  🐶🐱 🐶🐱 🐶🐱 🐶🐱')
    
  }
 

}
