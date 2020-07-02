import { Component, OnInit } from '@angular/core';
import { SaleEntityService } from 'src/app/api/saleEntity.service';
import { Sale, CollectionModelSale } from 'src/app/model/models';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class salesComponent implements OnInit {
  public Csales : CollectionModelSale;
  public sales : Array<Sale> = [];
  constructor(private saleEntityService : SaleEntityService ) { }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll() {
    console.log('getting all ..');
    this.saleEntityService.findAllSaleUsingGET().subscribe(
    
    res => {
      console.log('getting all 1 ..');
      this.Csales = res;
      console.log('getting all 2 ..');
  
      this.sales = this.Csales["_embedded"]["sales"];
      this.sales.forEach(element => {
        delete element["_links"];
      });
      
      console.log(this.sales); 
      
    },
    err => {
      console.log(err);
    },
    () => {
  
    }
    )
  }
  public delete(p : Sale ) 
  {
    if (confirm("Are you sure you want to delete " + p.rowid + "?")) {

      this.saleEntityService.deleteSaleUsingDELETE(p.rowid).subscribe(
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
