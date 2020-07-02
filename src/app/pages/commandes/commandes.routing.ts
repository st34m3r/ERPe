import { Routes } from '@angular/router';
import { commandesComponent } from './commandes.component';
import { EditcommandeComponent } from './editcommande/editcommande.component';
import { NewcommandeComponent } from './newcommande/newcommande.component';

export const commandeS_ROUTES: Routes = [
    {
      path: 'commandes',
      component: commandesComponent
    },
    
    {
      path: 'commandes/:id',
      component: EditcommandeComponent
    },
    {
      path: 'newcommande',
      component: NewcommandeComponent
    }
  ];
  