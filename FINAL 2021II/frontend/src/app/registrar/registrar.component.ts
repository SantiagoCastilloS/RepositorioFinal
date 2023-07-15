import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../ApiService";
import {Aplicacion} from "../../interfaces";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  codigoApp: string="";
  nombreApp: string="";
  mensaje: string = "";

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  registrar(): void {
    console.log(this.codigoApp);
    console.log(this.nombreApp);

    const aplicacion: Aplicacion = {
      codigoApp: this.codigoApp,
      nombreApp: this.nombreApp
    }

    this.api.registrarAplicacion(aplicacion).subscribe(retorno => {
      this.mensaje = "La aplicacion " + retorno.codigoApp + " fue registrada correctamente en el catalogo";
      console.log(this.mensaje)
    })
  }
}
