import { Component, OnInit } from "@angular/core";
import { producto } from "../../models/adopcion";
/* importar el modelo para que tenga acceso a el */
import { productoService } from "../../services/adopcion.service";
/* importar el servicio para que el formulario tenga acceso a ellos */

@Component({
  selector: "app-adopcion",
  templateUrl: "./adopcion.component.html",
  styleUrls: ["./adopcion.component.scss"],
})
export class AdopcionComponent implements OnInit {
  public Producto: producto;
  public productosEncontrados: any = []; /* los datos encontrados los va a guardar en un array */

  /* guardamos el modelo en una variable publica, para poder entrar a sus caracteristicas */

  /* se hace una variable privada para que no todos tengan acceso a la informacion */
  constructor(private service: productoService) {
    /* crear el modelo del producto para que se limpie cada dato */
    this.Producto = new producto(); /* cada que se crea un producto, se crean nuevos modelos paa que no se sobreescribam los datos */
  }

  ngOnInit(): void {
    /* Se invocara o cargara todos los metodos que queremos que se cargen a la vista sin necesidad de requerir eventos */
  }

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
