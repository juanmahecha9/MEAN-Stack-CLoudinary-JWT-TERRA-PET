import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// Components
import { TasksComponent } from "./components/tasks/tasks.component";
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";
import { AuthGuard } from "./auth.guard";
import { PefilFotosComponent } from "./components/pefil-fotos/pefil-fotos.component";
import { PefilvistaComponent } from "./components/pefilvista/pefilvista.component";
import { PefilpreComponent } from "./components/pefilpre/pefilpre.component";
import { AdopcionRegistroComponent } from "./componentes/adopcion-registro/adopcion-registro.component";
import { CargarimagenComponent } from "./componentes/cargarimagen/cargarimagen.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: TasksComponent,
  },
  {
    path: "photos/new",
    component: PefilFotosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "photos",
    component: PefilvistaComponent,
  },
  {
    path: "photos/:id",
    component: PefilpreComponent,
  },
  {
    path: "signin",
    component: SigninComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "solicitudes",
    component: AdopcionRegistroComponent,
  },
  {
    path: "imagenes",
    component: CargarimagenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
