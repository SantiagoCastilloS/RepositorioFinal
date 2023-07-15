import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../ApiService";
import {Perfil} from "../../interfaces";

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {
  perfil: Perfil = {} as Perfil;
  constructor(private api: ApiService) { }
  ngOnInit(): void {
  }
  actualizar() {
    this.api.actualizarIndicadorPerfil(this.perfil).subscribe(retorno=>console.log(retorno.codigoPerfil + " .. REGISTRADO CORRECTAMENTE"));
  }
}
