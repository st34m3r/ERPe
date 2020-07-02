import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from 'src/app/model/models';
import { CommandeEntityService } from 'src/app/api/commandeEntity.service';

@Component({
  selector: 'app-newcommande',
  templateUrl: './newcommande.component.html',
  styleUrls: ['./newcommande.component.scss']
})
export class NewcommandeComponent implements OnInit {
  commande : Commande =  {} as Commande;
  feedback : any = {};
  constructor(private  router : Router, private route :  ActivatedRoute , private commandeEntityService : CommandeEntityService) { }

  ngOnInit(): void {
  
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
    this.router.navigate(['/commandes']);
  }
}