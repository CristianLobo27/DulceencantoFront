import { Component, OnInit } from '@angular/core';
import { Nogal } from '../../../models/nogal';
import { NogalService } from '../../../services/NogalService/nogal.service';
import { ModalNogalComponent } from './modal-nogal/modal-nogal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-nogal',
  templateUrl: './nogal.component.html',
  styleUrls: ['./nogal.component.css']
})
export class NogalComponent implements OnInit {

  public nogal: Nogal[] = [];

  constructor(private nogalService: NogalService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getNogal();
  }

  public getNogal(): void{
    this.nogalService.getNogal().subscribe(
      (response: Nogal[])=> {
        this.nogal=response;
      })
    
  }

  openDialog(cocina:Nogal) {
    const dialogRef = this.dialog.open(ModalNogalComponent,{ 
      data: {...cocina}
    });

    dialogRef.afterClosed().subscribe((result: String)=> {
      console.log(`Dialog result: ${result}`);
    });
  }

}
