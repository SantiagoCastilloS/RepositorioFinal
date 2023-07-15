import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../ApiService";
import {Perfil} from "../../interfaces";

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {
  codigoPerfil: string="";
  indicadorPerfil: string="";
  mensaje: string = "";

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  actualizar(): void {
    console.log(this.codigoPerfil);
    console.log(this.indicadorPerfil);

    const perfil: Perfil = {
      codigoPerfil: this.codigoPerfil,
      indicadorPerfil: this.indicadorPerfil
    }

    this.api.actualizarIndicadorPerfil(perfil).subscribe(retorno => {
      this.mensaje = "El indicardor del codigo:  " + retorno.codigoPerfil + " fue actualizado " +
        "correctamente al valor: "+retorno.indicadorPerfil;
      console.log(this.mensaje)
    })
  }
}
