import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Purchase, EntityModelPurchase } from 'src/app/model/models';
import { PurchaseEntityService } from 'src/app/api/purchaseEntity.service';
@Component({
  selector: 'app-editpurchase',
  templateUrl: './editpurchase.component.html',
  styleUrls: ['./editpurchase.component.scss']
})
export class EditpurchaseComponent implements OnInit {
  routedId : number;
  purchase : Purchase;
  Epurchase : EntityModelPurchase;
  feedback : any = {};
  constructor(private  router : Router, private route :  ActivatedRoute , private purchaseEntityService : PurchaseEntityService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.routedId = params['id'];
      this.getpurchase(this.routedId);
      console.log(this.routedId);
      });
  
  }
  public getpurchase(id : number)
  {
    this.purchaseEntityService.findByIdPurchaseUsingGET(id).subscribe(
      res=>{
          this.Epurchase= res ;
          delete this.Epurchase["_links"];
          this.purchase= this.Epurchase;
          console.log(this.purchase);
      },
      err=>{
        
      }
    )
  }
  public save()
  {
    this.purchaseEntityService.savePurchaseUsingPOST(this.purchase).subscribe(
      purchase =>
      {
        this.purchase=purchase;
        this.feedback = { type : 'success' , message :'saved successfully'};
        setTimeout(()=>{
          this.router.navigate(['/purchases']);
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
