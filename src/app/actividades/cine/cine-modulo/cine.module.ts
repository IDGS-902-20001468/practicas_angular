import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CineComponent } from '../cine/cine.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    CineComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CineComponent
  ]
})
export class CineModule { }
