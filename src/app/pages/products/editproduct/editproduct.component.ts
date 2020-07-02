import { Component, OnInit } from '@angular/core';
import { ProductEntityService } from '../../../api/productEntity.service'
import { Product, EntityModelBank, EntityModelProduct } from 'src/app/model/models';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
  routedId : number;
  product : Product;
  Eproduct : EntityModelProduct;
  feedback : any = {};
  constructor(private  router : Router, private route :  ActivatedRoute , private productEntityService : ProductEntityService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.routedId = params['id'];
      this.getProduct(this.routedId);
      console.log(this.routedId);
      });
  
  }
  public getProduct(id : number)
  {
    this.productEntityService.findByIdProductUsingGET(id).subscribe(
      res=>{
          this.Eproduct= res ;
          delete this.Eproduct["_links"];
          this.product= this.Eproduct;
          console.log(this.product);
      },
      err=>{
        
      }
    )
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
    this.router.navigate(['../']);
  }
  




}
