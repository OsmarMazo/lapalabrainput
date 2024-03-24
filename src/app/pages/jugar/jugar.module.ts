import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugarPageRoutingModule } from './jugar-routing.module';

import { JugarPage } from './jugar.page';
import { FilaComponent } from 'src/app/components/fila/fila.component';
import { CeldaComponent } from 'src/app/components/celda/celda.component';
import { InputComponent } from 'src/app/components/input/input.component';
import { BotonComponent } from 'src/app/components/boton/boton.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugarPageRoutingModule
  ],
  declarations: [JugarPage, FilaComponent, CeldaComponent,InputComponent,BotonComponent]
})
export class JugarPageModule {}
