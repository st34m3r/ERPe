import { Component, OnInit } from '@angular/core';
import { CanUserEntityService } from 'src/app/api/api';
import { CanUser, CollectionModelCanUser } from 'src/app/model/models';
@Component({
  selector: 'app-canusers',
  templateUrl: './canusers.component.html',
  styleUrls: ['./canusers.component.scss']
})
export class canusersComponent implements OnInit {
  public Ccanusers : CollectionModelCanUser;
  public canusers : Array<CanUser> = [];
  constructor(private canuserEntityService : CanUserEntityService ) { }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll() {
    console.log('getting all ..');
    this.canuserEntityService.findAllCanUserUsingGET().subscribe(
    
    res => {
      console.log('getting all 1 ..');
      this.Ccanusers = res;
      console.log('getting all 2 ..');
  
      this.canusers = this.Ccanusers["_embedded"]["canUsers"];
      this.canusers.forEach(element => {
        delete element["_links"];
      });
      
      console.log(this.canusers); 
      
    },
    err => {
      console.log(err);
    },
    () => {
  
    }
    )
  }
  public delete( p : CanUser ) 
  {
    if (confirm("Are you sure you want to delete " + p.rowid + "?")) {

      this.canuserEntityService.deleteCanUserUsingDELETE(p.rowid).subscribe(
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
