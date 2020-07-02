import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { saleS_ROUTES } from './sales.routing';
import { salesComponent } from './sales.component';
import { EditsaleComponent } from './editsale/editsale.component';
import { NewsaleComponent } from './newsale/newsale.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(saleS_ROUTES)
    ],
    declarations: [
      salesComponent ,
      EditsaleComponent ,
      NewsaleComponent 
    ],
    providers: [],
    exports: []
  })
  export class salesModule { }