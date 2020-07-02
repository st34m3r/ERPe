import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductEntityService } from 'src/app/api/productEntity.service';
import { ProductStockEntityService } from 'src/app/api/api';
import { EntityModelRole } from 'src/app/model/models';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.scss']
})
export class NewproductComponent implements OnInit {
  product : Product =  {} as Product;
  feedback : any = {};
  constructor(private  router : Router, private route :  ActivatedRoute , private productEntityService : ProductEntityService) { }

  ngOnInit(): void {
  
  }


  public save()
  {
    this.productEntityService.saveProductUsingPOST(this.product).subscribe(
      product =>
      {
        this.product=product;
        this.feedback = { type : 'success' , message :'saved successfully'};
        setTimeout(()=>{
          this.router.navigate(['/products']);
        },2000);
      },
      err =>{
        this.feedback = { type : 'danger' , message :'error saving'};
      }
    )
  }
  
  public cancel()
  {
    this.router.navigate(['/products']);
  }
}