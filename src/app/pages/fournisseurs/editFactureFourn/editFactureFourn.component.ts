import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FactureFourn, EntityModelFactureFourn } from 'src/app/model/models';
import { FactureFournEntityService } from 'src/app/api/factureFournEntity.service';
@Component({
  selector: 'app-editFactureFourn',
  templateUrl: './editFactureFourn.component.html',
  styleUrls: ['./editFactureFourn.component.scss']
})
export class EditFactureFournComponent implements OnInit {
  routedId : number;
  FactureFourn : FactureFourn;
  EFactureFourn : EntityModelFactureFourn;
  feedback : any = {};
  constructor(private  router : Router, private route :  ActivatedRoute , private FactureFournEntityService : FactureFournEntityService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.routedId = params['id'];
      this.getFactureFourn(this.routedId);
      console.log(this.routedId);
      });
  
  }
  public getFactureFourn(id : number)
  {
    this.FactureFournEntityService.findByIdFactureFournUsingGET(id).subscribe(
      res=>{
          this.EFactureFourn= res ;
          delete this.EFactureFourn["_links"];
          this.FactureFourn= this.EFactureFourn;
          console.log(this.FactureFourn);
      },
      err=>{
        
      }
    )
  }
  public save()
  {
    this.FactureFournEntityService.saveFactureFournUsingPOST(this.FactureFourn).subscribe(
      FactureFourn =>
      {
        this.FactureFourn=FactureFourn;
        this.feedback = { type : 'success' , message :'saved successfully'};
        setTimeout(()=>{
          this.router.navigate(['/FactureFourns']);
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
