import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PRODUCTS_ROUTES } from './products.routing';
import { ProductsComponent } from './products.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { NewproductComponent } from './newproduct/newproduct.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(PRODUCTS_ROUTES)
    ],
    declarations: [
      ProductsComponent,
      EditproductComponent,
      NewproductComponent
    ],
    providers: [],
    exports: []
  })
  export class ProductsModule { }