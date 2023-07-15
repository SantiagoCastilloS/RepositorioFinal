import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../ApiService";
import {Aplicacion} from "../../interfaces";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  aplicacion: Aplicacion = {} as Aplicacion;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  registrar() {
    this.api.registrarAplicacion(this.aplicacion).subscribe(retorno=>console.log(retorno.codigoApp + " .. REGISTRADO CORRECTAMENTE"));
  }
}
