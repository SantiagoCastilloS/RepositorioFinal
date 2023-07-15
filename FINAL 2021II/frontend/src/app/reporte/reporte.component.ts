import { Component, OnInit } from '@angular/core';
import {Consulta} from "../../interfaces";
import {ApiService} from "../../ApiService";

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {
  lista: Consulta[] = [];
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.obtenerReporte().subscribe(data =>{this.lista = data.consultas})
  }

}
