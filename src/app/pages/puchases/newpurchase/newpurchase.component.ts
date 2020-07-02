import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Purchase } from 'src/app/model/models';
import { PurchaseEntityService } from 'src/app/api/purchaseEntity.service';

@Component({
  selector: 'app-newpurchase',
  templateUrl: './newpurchase.component.html',
  styleUrls: ['./newpurchase.component.scss']
})
export class NewpurchaseComponent implements OnInit {
  purchase : Purchase =  {} as Purchase;
  feedback : any = {};
  constructor(private  router : Router, private route :  ActivatedRoute , private purchaseEntityService : PurchaseEntityService) { }

  ngOnInit(): void {
  
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
    this.router.navigate(['/purchases']);
  }
}