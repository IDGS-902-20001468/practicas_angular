import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { ResistenciaComponent } from "./actividades/resistencia/resistencia/resistencia.component";
import { DistanciaComponent } from "./actividades/distancia/distancia/distancia.component";
import { CineComponent } from "./actividades/cine/cine/cine.component";
import { PizzeriaComponent } from "./actividades/pizzeria/pizzeria.component";

const routes:Routes=[
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'Res', component: ResistenciaComponent},
  {path:'Dis', component: DistanciaComponent},
  {path:'Cinepolis', component: CineComponent},
  {path:'Pizzeria', component: PizzeriaComponent},


]
@NgModule
({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
