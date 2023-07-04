import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResistenciaModule } from './actividades/resistencia/resistencia-modulo/resistencia.module';
import { CineModule } from './actividades/cine/cine-modulo/cine.module';
import { DistanciaModule } from './actividades/distancia/distancia-modulo/distancia.module';
import { MenuComponent } from './actividades/menu/menu.component';
import { PizzeriaComponent } from './actividades/pizzeria/pizzeria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PizzeriaFilterPipe } from './actividades/pizzeria-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PizzeriaFilterPipe,
    PizzeriaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ResistenciaModule,
    CineModule,
    DistanciaModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
