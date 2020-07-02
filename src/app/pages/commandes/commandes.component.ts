import { Component, OnInit } from '@angular/core';
import { CommandeEntityService } from 'src/app/api/api';
import { Commande, CollectionModelCommande } from 'src/app/model/models';
@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class commandesComponent implements OnInit {
  public Ccommandes : CollectionModelCommande;
  public commandes : Array<Commande> = [];
  constructor(private commandeEntityService : CommandeEntityService ) { }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll() {
    console.log('getting all ..');
    this.commandeEntityService.findAllCommandeUsingGET().subscribe(
    
    res => {
      console.log('getting all 1 ..');
      this.Ccommandes = res;
      console.log('getting all 2 ..');
  
      this.commandes = this.Ccommandes["_embedded"]["commandes"];
      this.commandes.forEach(element => {
        delete element["_links"];
      });
      
      console.log(this.commandes); 
      
    },
    err => {
      console.log(err);
    },
    () => {
  
    }
    )
  }
  public delete(p : Commande ) 
  {
    if (confirm("Are you sure you want to delete " + p.rowid + "?")) {

      this.commandeEntityService.deleteCommandeUsingDELETE(p.rowid).subscribe(
        res=> {
          console.log("deleted");
          this.getAll();
        },
        err => {
          console.log(err);
          this.getAll();
        }
      )
   }

  }
}
