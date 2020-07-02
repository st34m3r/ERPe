import { Component, OnInit } from '@angular/core';
import { ProductEntityService } from '../../api/productEntity.service';
import { CollectionModelProduct } from 'src/app/model/collectionModelProduct';
import { Product } from 'src/app/model/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public Cproducts : CollectionModelProduct;
  public products : Array<Product> = [];
  constructor(private productEntityService : ProductEntityService ) { }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll() {
    console.log('getting all ..');
  this.productEntityService.findAllProductUsingGET().subscribe(
    
    res => {
      console.log('getting all 1 ..');
      this.Cproducts = res;
      console.log('getting all 2 ..');
  
      this.products = this.Cproducts["_embedded"]["products"];
      console.log(this.products); 
      
    },
    err => {
      console.log(err);
    },
    () => {
  
    }
    )
  }
  public delete(p : Product ) 
  {
    if (confirm("Are you sure you want to delete " + p.rowid + "?")) {

      this.productEntityService.deleteProductUsingDELETE(p.rowid).subscribe(
        res=> {
          console.log("deleted");
          this.getAll();
        },
        err => {
          console.log(err);
          this.getAll();
        }
      )
   }

  }
}
