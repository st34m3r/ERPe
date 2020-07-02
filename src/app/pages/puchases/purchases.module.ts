import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { purchaseS_ROUTES } from './purchases.routing';
import { purchasesComponent } from './purchases.component';
import { EditpurchaseComponent } from './editpurchase/editpurchase.component';
import { NewpurchaseComponent } from './newpurchase/newpurchase.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(purchaseS_ROUTES)
    ],
    declarations: [
      purchasesComponent ,
      EditpurchaseComponent ,
      NewpurchaseComponent 
    ],
    providers: [],
    exports: []
  })
  export class purchasesModule { }