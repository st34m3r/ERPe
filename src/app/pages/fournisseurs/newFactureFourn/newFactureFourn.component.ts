import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FactureFourn } from 'src/app/model/models';
import { FactureFournEntityService } from 'src/app/api/api';

@Component({
  selector: 'app-newFactureFourn',
  templateUrl: './newFactureFourn.component.html',
  styleUrls: ['./newFactureFourn.component.scss']
})
export class NewFactureFournComponent implements OnInit {
  FactureFourn : FactureFourn =  {} as FactureFourn;
  feedback : any = {};
  constructor(private  router : Router, private route :  ActivatedRoute , private FactureFournEntityService : FactureFournEntityService) { }

  ngOnInit(): void {
  
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
    this.router.navigate(['/FactureFourns']);
  }
}