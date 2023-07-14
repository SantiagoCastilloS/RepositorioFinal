import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaComponent} from "./lista/lista.component";
import {InsertarComponent} from "./insertar/insertar.component";
import {ActualizarComponent} from "./actualizar/actualizar.component";

const routes: Routes = [
  {path:"lista", component: ListaComponent},
  {path:"insertar", component: InsertarComponent},
  {path:"actualizar", component: ActualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
