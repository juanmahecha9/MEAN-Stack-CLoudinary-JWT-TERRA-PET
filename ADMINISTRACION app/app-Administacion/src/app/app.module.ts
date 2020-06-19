import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import {productoService} from './services/adopcion.service';
import { RegistroService } from './services/registro.service'
/* importamos o concectamos el servicio al modulo principal */
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { PefilFotosComponent } from './components/pefil-fotos/pefil-fotos.component';
import { PefilvistaComponent } from './components/pefilvista/pefilvista.component';
import { PefilpreComponent } from './components/pefilpre/pefilpre.component';
import { AdopcionRegistroComponent } from './componentes/adopcion-registro/adopcion-registro.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { NotificacionComponent } from './componentes/notificacion/notificacion.component';
import { CargarimagenComponent } from './componentes/cargarimagen/cargarimagen.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    TasksComponent,
    PefilFotosComponent,
    PefilvistaComponent,
    PefilpreComponent,
    AdopcionRegistroComponent,
    GaleriaComponent,
    NotificacionComponent,
    CargarimagenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard, RegistroService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
