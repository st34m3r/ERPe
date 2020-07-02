import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CanUser } from 'src/app/model/models';
import { CanUserEntityService } from 'src/app/api/canUserEntity.service';

@Component({
  selector: 'app-newcanuser',
  templateUrl: './newcanuser.component.html',
  styleUrls: ['./newcanuser.component.scss']
})
export class NewcanuserComponent implements OnInit {
  canuser : CanUser =  {} as CanUser;
  feedback : any = {};
  constructor(private  router : Router, private route :  ActivatedRoute , private canuserEntityService : CanUserEntityService) { }

  ngOnInit(): void {
  
  }


  public save()
  {
    this.canuserEntityService.saveCanUserUsingPOST(this.canuser).subscribe(
      canuser =>
      {
        this.canuser=canuser;
        this.feedback = { type : 'success' , message :'saved successfully'};
        setTimeout(()=>{
          this.router.navigate(['/canusers']);
        },2000);
      },
      err =>{
        this.feedback = { type : 'danger' , message :'error saving'};
      }
    )
  }
  
  public cancel()
  {
    this.router.navigate(['/canusers']);
  }
 
}