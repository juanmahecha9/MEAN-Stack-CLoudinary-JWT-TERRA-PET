import { Component, OnInit } from "@angular/core";
import { producto } from "../../models/imagen";
import { CargarimagenService } from "../../services/cargarimagen.service";

@Component({
  selector: "app-cargarimagen",
  templateUrl: "./cargarimagen.component.html",
  styleUrls: ["./cargarimagen.component.css"],
})
export class CargarimagenComponent implements OnInit {
  public Producto: producto;
  public productosEncontrados: any = [];

  constructor(private service: CargarimagenService) {
    this.Producto = new producto();
  }

  ngOnInit() {}

  /* Se subscribe al sercicio de crear producto de la api , y esta responde con cualquier tipo de dato 
  se cran instancias para validar el estado del proceso*/
  formularioUp() {
    this.service.createData(this.Producto).subscribe((res: any) => {
      if (res.statusCode !== 200) {
        alert("Error en la solicitud de adopcion");
      } else {
        alert(
          "Solicitud de adopcion registrada, Pronto nos pondremos en contacto con usted. "
        );
      }
    });
  }
}
