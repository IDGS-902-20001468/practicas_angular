import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import { ResistenciaComponent } from '../resistencia/resistencia.component';


@NgModule({
  declarations: [
    ResistenciaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgIf,
  ],
  exports:[
    ResistenciaComponent
  ]
})
export class ResistenciaModule { }
