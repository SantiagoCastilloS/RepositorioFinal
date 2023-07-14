import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../ApiService";
import {Aplicacion} from "../../interfaces";

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.scss']
})
export class InsertarComponent implements OnInit{
  aplicacion: Aplicacion = {} as Aplicacion;


  constructor(private api: ApiService) {
  }
  ngOnInit(): void {
  }

  insertar() {
    this.api.registrarAplicacion(this.aplicacion).subscribe(retorno => console.log(retorno.codigoApp + "- REGISTRADO EXITOSAMENTE"));
  }
}
