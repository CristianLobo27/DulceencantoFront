import { Component, OnInit } from '@angular/core';
import { Almendro } from '../../../models/almendro';
import { AlmendroService } from '../../../services/AlmendroService/almendro.service';

@Component({
  selector: 'app-almendro',
  templateUrl: './almendro.component.html',
  styleUrls: ['./almendro.component.css']
})
export class AlmendroComponent implements OnInit {

  public almendro: Almendro[] = [];

  constructor(private almendroService: AlmendroService) { }

  ngOnInit(): void {
    this.getAlmendro();
  }

  public getAlmendro(): void{
    this.almendroService.getAlmendro().subscribe(
      (response: Almendro[])=> {
        this.almendro=response;
      })
    
  }

}
