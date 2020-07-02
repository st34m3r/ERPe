import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { NewproductComponent } from './newproduct/newproduct.component';

export const PRODUCTS_ROUTES: Routes = [
    {
      path: 'products',
      component: ProductsComponent
    },
    
    {
      path: 'products/:id',
      component: EditproductComponent
    },
    {
      path: 'newproduct',
      component: NewproductComponent
    }
  ];
  