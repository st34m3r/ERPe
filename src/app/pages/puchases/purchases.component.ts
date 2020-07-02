import { Component, OnInit } from '@angular/core';
import { PurchaseEntityService } from 'src/app/api/purchaseEntity.service';
import { Purchase, CollectionModelPurchase } from 'src/app/model/models';
@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class purchasesComponent implements OnInit {
  public Cpurchases : CollectionModelPurchase;
  public purchases : Array<Purchase> = [];
  constructor(private purchaseEntityService : PurchaseEntityService ) { }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll() {
    console.log('getting all ..');
    this.purchaseEntityService.findAllPurchaseUsingGET().subscribe(
    
    res => {
      console.log('getting all 1 ..');
      this.Cpurchases = res;
      console.log('getting all 2 ..');
  
      this.purchases = this.Cpurchases["_embedded"]["purchases"];
      this.purchases.forEach(element => {
        delete element["_links"];
      });
      
      console.log(this.purchases); 
      
    },
    err => {
      console.log(err);
    },
    () => {
  
    }
    )
  }
  public delete(p : Purchase ) 
  {
    if (confirm("Are you sure you want to delete " + p.rowid + "?")) {

      this.purchaseEntityService.deletePurchaseUsingDELETE(p.rowid).subscribe(
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
