import { Routes } from '@angular/router';
import { FactureFournsComponent } from './FactureFourns.component';
import { EditFactureFournComponent } from './editFactureFourn/editFactureFourn.component';
import { NewFactureFournComponent } from './newFactureFourn/newFactureFourn.component';

export const FactureFournS_ROUTES: Routes = [
    {
      path: 'FactureFourns',
      component: FactureFournsComponent
    },
    
    {
      path: 'FactureFourns/:id',
      component: EditFactureFournComponent
    },
    {
      path: 'newFactureFourn',
      component: NewFactureFournComponent
    }
  ];
  