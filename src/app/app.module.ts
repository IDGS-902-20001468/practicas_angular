import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResistenciaModule } from './actividades/resistencia/resistencia-modulo/resistencia.module';
import { CineModule } from './actividades/cine/cine-modulo/cine.module';
import { DistanciaModule } from './actividades/distancia/distancia-modulo/distancia.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ResistenciaModule,
    CineModule,
    DistanciaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
