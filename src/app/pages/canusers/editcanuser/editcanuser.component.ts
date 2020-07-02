import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CanUser, EntityModelCanUser } from 'src/app/model/models';
import { CanUserEntityService } from 'src/app/api/canUserEntity.service';
@Component({
  selector: 'app-editcanuser',
  templateUrl: './editcanuser.component.html',
  styleUrls: ['./editcanuser.component.scss']
})
export class EditcanuserComponent implements OnInit {
  routedId : number;
  canuser : CanUser;
  Ecanuser : EntityModelCanUser;
  feedback : any = {};
  constructor(private  router : Router, private route :  ActivatedRoute , private canuserEntityService : CanUserEntityService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.routedId = params['id'];
      this.getcanuser(this.routedId);
      console.log(this.routedId);
      });
  
  }
  public getcanuser(id : number)
  {
    this.canuserEntityService.findByIdCanUserUsingGET(id).subscribe(
      res=>{
          this.Ecanuser= res ;
          delete this.Ecanuser["_links"];
          this.canuser= this.Ecanuser;
          console.log(this.canuser);
      },
      err=>{
        
      }
    )
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
    this.router.navigate(['../']);
  }
  




}
