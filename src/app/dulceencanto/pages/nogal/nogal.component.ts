import { Component, OnInit } from '@angular/core';
import { Nogal } from '../../../models/nogal';
import { NogalService } from '../../../services/NogalService/nogal.service';

@Component({
  selector: 'app-nogal',
  templateUrl: './nogal.component.html',
  styleUrls: ['./nogal.component.css']
})
export class NogalComponent implements OnInit {

  public nogal: Nogal[] = [];

  constructor(private nogalService: NogalService) { }

  ngOnInit(): void {
    this.getNogal();
  }

  public getNogal(): void{
    this.nogalService.getNogal().subscribe(
      (response: Nogal[])=> {
        this.nogal=response;
      })
    
  }

}
