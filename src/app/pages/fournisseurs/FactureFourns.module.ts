import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FactureFournS_ROUTES } from './FactureFourns.routing';
import { FactureFournsComponent } from './FactureFourns.component';
import { EditFactureFournComponent } from './editFactureFourn/editFactureFourn.component';
import { NewFactureFournComponent } from './newFactureFourn/newFactureFourn.component';
import { FactureEntityService } from 'src/app/api/factureEntity.service';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(FactureFournS_ROUTES)
    ],
    declarations: [
      FactureFournsComponent ,
      EditFactureFournComponent ,
      NewFactureFournComponent 
    ],
    providers: [
      FactureEntityService

    ],
    exports: []
  })
  export class FactureFournsModule { }