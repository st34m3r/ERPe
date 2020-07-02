import { Routes } from '@angular/router';
import { purchasesComponent } from './purchases.component';
import { EditpurchaseComponent } from './editpurchase/editpurchase.component';
import { NewpurchaseComponent } from './newpurchase/newpurchase.component';

export const purchaseS_ROUTES: Routes = [
    {
      path: 'purchases',
      component: purchasesComponent
    },
    
    {
      path: 'purchases/:id',
      component: EditpurchaseComponent
    },
    {
      path: 'newpurchase',
      component: NewpurchaseComponent
    }
  ];
  