import { Component, OnInit } from '@angular/core';
import { FactureFournEntityService } from 'src/app/api/api';
import { FactureFourn, CollectionModelFactureFourn } from 'src/app/model/models';
@Component({
  selector: 'app-FactureFourns',
  templateUrl: './FactureFourns.component.html',
  styleUrls: ['./FactureFourns.component.scss']
})
export class FactureFournsComponent implements OnInit {
  public CFactureFourns : CollectionModelFactureFourn;
  public FactureFourns : Array<FactureFourn> = [];
  constructor(private FactureFournEntityService : FactureFournEntityService ) { }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll() {
    console.log('getting all ..');
    this.FactureFournEntityService.findAllFactureFournUsingGET().subscribe(
    
    res => {
      console.log('getting all 1 ..');
      this.CFactureFourns = res;
      console.log('getting all 2 ..');
      console.log(res);
      this.FactureFourns = this.CFactureFourns["_embedded"]["facture_fourns"];
      this.FactureFourns.forEach(element => {
        delete element["_links"];
      });
      
      console.log(this.FactureFourns); 
      
    },
    err => {
      console.log(err);
    },
    () => {
  
    }
    )
  }
  public delete(p : FactureFourn ) 
  {
    if (confirm("Are you sure you want to delete " + p.rowid + "?")) {

      this.FactureFournEntityService.deleteFactureFournUsingDELETE(p.rowid).subscribe(
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
