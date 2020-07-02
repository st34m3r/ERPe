import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sale } from 'src/app/model/models';
import { SaleEntityService } from 'src/app/api/saleEntity.service';

@Component({
  selector: 'app-newsale',
  templateUrl: './newsale.component.html',
  styleUrls: ['./newsale.component.scss']
})
export class NewsaleComponent implements OnInit {
  sale : Sale =  {} as Sale;
  feedback : any = {};
  constructor(private  router : Router, private route :  ActivatedRoute , private saleEntityService : SaleEntityService) { }

  ngOnInit(): void {
  
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
    this.router.navigate(['/sales']);
  }
}