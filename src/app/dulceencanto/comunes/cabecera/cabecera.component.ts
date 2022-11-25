import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;

  constructor() { }

  ngOnInit(): void {
  }

  someMethod(){
    this.trigger.openMenu();
  }

}
