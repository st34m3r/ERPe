import { Routes } from '@angular/router';
import { canusersComponent } from './canusers.component';
import { EditcanuserComponent } from './editcanuser/editcanuser.component';
import { NewcanuserComponent } from './newcanuser/newcanuser.component';

export const CAN_USERS_ROUTES: Routes = [
    {
      path: 'canusers',
      component: canusersComponent
    },
    
    {
      path: 'canusers/:id',
      component: EditcanuserComponent
    },
    {
      path: 'newcanuser',
      component: NewcanuserComponent
    }
  ];
  