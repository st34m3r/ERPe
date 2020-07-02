import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande, EntityModelCommande } from 'src/app/model/models';
import { CommandeEntityService } from 'src/app/api/commandeEntity.service';
@Component({
  selector: 'app-editcommande',
  templateUrl: './editcommande.component.html',
  styleUrls: ['./editcommande.component.scss']
})
export class EditcommandeComponent implements OnInit {
  routedId : number;
  commande : Commande;
  Ecommande : EntityModelCommande;
  feedback : any = {};
  constructor(private  router : Router, private route :  ActivatedRoute , private commandeEntityService : CommandeEntityService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.routedId = params['id'];
      this.getcommande(this.routedId);
      console.log(this.routedId);
      });
  
  }
  public getcommande(id : number)
  {
    this.commandeEntityService.findByIdCommandeUsingGET(id).subscribe(
      res=>{
          this.Ecommande= res ;
          delete this.Ecommande["_links"];
          this.commande= this.Ecommande;
          console.log(this.commande);
      },
      err=>{
        
      }
    )
  }
  public save()
  {
    this.commandeEntityService.saveCommandeUsingPOST(this.commande).subscribe(
      commande =>
      {
        this.commande=commande;
        this.feedback = { type : 'success' , message :'saved successfully'};
        setTimeout(()=>{
          this.router.navigate(['/commandes']);
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
