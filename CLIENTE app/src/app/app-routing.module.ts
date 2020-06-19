import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
// Components
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { InicioComponent } from'./componentes/inicio/inicio.component';
import { FiltrosComponent } from './componentes/filtros/filtros.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { SigninComponent } from './componentes/signin/signin.component';
import { SignupComponent } from './componentes/signup/signup.component';
import {AdopcionComponent } from './componentes/adopcion/adopcion.component';
import { AnimalesComponent } from './componentes/animales/animales.component'
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';

const routes: Routes = [
  {path: '',
  redirectTo: '/inicio', pathMatch: 'full'
  },
  {
    path: 'team',
    component: EquipoComponent
  },
    {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'aboutus',
    component: NosotrosComponent
  },
  {
    path: 'photos',
    component: FiltrosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  {
    path: 'login',
    component: SigninComponent
  },
  {
    path: 'registro',
    component: SignupComponent
  },
  {
    path:'adopcion-proceso',
    component: AdopcionComponent
  },
  {
    path: 'chat',
    component: AnimalesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
