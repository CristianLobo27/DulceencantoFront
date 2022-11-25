import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cocina } from '../../../models/cocina';
import { CocinaService } from '../../../services/CocinaService/cocina.service';
import { ModalComponent } from './modal/modal.component';



@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css']
})
export class CocinaComponent implements OnInit {

  public cocinas: Cocina[] = [];
  public cocina!: Cocina;

  constructor(private cocinaService: CocinaService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCocina();
  }

  public getCocina(): void{
    this.cocinaService.getCocina().subscribe(
      (response: Cocina[])=> {
        this.cocinas=response;
      })
    
  }

  public getCocinaById(id:number): void{
    this.cocinaService.getCocinaById(id).subscribe(
      (response1: Cocina)=>{
        this.cocina= response1;
      }
    )

  }

  openDialog(cocina:Cocina) {
    const dialogRef = this.dialog.open(ModalComponent,{ 
      data: {...cocina}
    });

    dialogRef.afterClosed().subscribe((result: String)=> {
      console.log(`Dialog result: ${result}`);
    });
  }
}

