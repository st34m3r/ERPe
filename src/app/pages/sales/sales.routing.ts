import { Routes } from '@angular/router';
import { salesComponent } from './sales.component';
import { EditsaleComponent } from './editsale/editsale.component';
import { NewsaleComponent } from './newsale/newsale.component';

export const saleS_ROUTES: Routes = [
    {
      path: 'sales',
      component: salesComponent
    },
    
    {
      path: 'sales/:id',
      component: EditsaleComponent
    },
    {
      path: 'newsale',
      component: NewsaleComponent
    }
  ];
  