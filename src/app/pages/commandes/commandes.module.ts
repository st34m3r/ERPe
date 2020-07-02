import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { commandeS_ROUTES } from './commandes.routing';
import { commandesComponent } from './commandes.component';
import { EditcommandeComponent } from './editcommande/editcommande.component';
import { NewcommandeComponent } from './newcommande/newcommande.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(commandeS_ROUTES)
    ],
    declarations: [
      commandesComponent ,
      EditcommandeComponent ,
      NewcommandeComponent 
    ],
    providers: [],
    exports: []
  })
  export class commandesModule { }