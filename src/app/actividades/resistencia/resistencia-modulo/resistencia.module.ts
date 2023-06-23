import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { ResistenciaComponent } from '../resistencia/resistencia.component';


@NgModule({
  declarations: [
    ResistenciaComponent
  ],
  imports: [
    MatTableModule,
    CommonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    NgIf,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule
  ],
  exports:[
    ResistenciaComponent
  ]
})
export class ResistenciaModule { }
