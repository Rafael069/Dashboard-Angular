import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { DadosService } from './dados.service';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  exports:[
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
  	DadosService
  ]
})
export class DashboardModule { }
