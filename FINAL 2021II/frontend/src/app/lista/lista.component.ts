import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../ApiService";
import {Consulta} from "../../interfaces";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit{
  lista: Consulta[] = [];
  constructor(private api:ApiService) {
  }
  ngOnInit(): void {
    this.api.obtenerReporte().subscribe(data=>{this.lista = data.consultas})
  }
}
