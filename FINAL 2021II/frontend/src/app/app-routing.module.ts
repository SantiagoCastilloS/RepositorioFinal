import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReporteComponent} from "./reporte/reporte.component";
import {RegistrarComponent} from "./registrar/registrar.component";
import {ActualizarComponent} from "./actualizar/actualizar.component";

const routes: Routes = [
  {path:"reporte", component: ReporteComponent},
  {path:"registrar", component: RegistrarComponent},
  {path:"actualizar", component: ActualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
