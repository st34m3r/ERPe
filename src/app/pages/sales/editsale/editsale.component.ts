import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sale, EntityModelSale } from 'src/app/model/models';
import { SaleEntityService } from 'src/app/api/saleEntity.service';
@Component({
  selector: 'app-editsale',
  templateUrl: './editsale.component.html',
  styleUrls: ['./editsale.component.scss']
})
export class EditsaleComponent implements OnInit {
  routedId : number;
  sale : Sale;
  Esale : EntityModelSale;
  feedback : any = {};
  constructor(private  router : Router, private route :  ActivatedRoute , private saleEntityService : SaleEntityService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.routedId = params['id'];
      this.getsale(this.routedId);
      console.log(this.routedId);
      });
  
  }
  public getsale(id : number)
  {
    this.saleEntityService.findByIdSaleUsingGET(id).subscribe(
      res=>{
          this.Esale= res ;
          delete this.Esale["_links"];
          this.sale= this.Esale;
          console.log(this.sale);
      },
      err=>{
        
      }
    )
  }
  public save()
  {
    this.saleEntityService.saveSaleUsingPOST(this.sale).subscribe(
      sale =>
      {
        this.sale=sale;
        this.feedback = { type : 'success' , message :'saved successfully'};
        setTimeout(()=>{
          this.router.navigate(['/sales']);
        },2000);
      },
      err =>{
        this.feedback = { type : 'danger' , message :'error saving'};
      }
    )
  }
  
  public cancel()
  {
    this.router.navigate(['../']);
  }
  




}
