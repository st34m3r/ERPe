import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CAN_USERS_ROUTES } from './canusers.routing';
import { canusersComponent } from './canusers.component';
import { EditcanuserComponent } from './editcanuser/editcanuser.component';
import { NewcanuserComponent } from './newcanuser/newcanuser.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(CAN_USERS_ROUTES)
    ],
    declarations: [
      canusersComponent ,
      EditcanuserComponent ,
      NewcanuserComponent 
    ],
    providers: [],
    exports: []
  })
  export class canusersModule { }