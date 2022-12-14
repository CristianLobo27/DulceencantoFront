import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Actividades } from '../../../../models/actividades';

@Component({
  selector: 'app-modal-actividades',
  templateUrl: './modal-actividades.component.html',
  styleUrls: ['./modal-actividades.component.css']
})
export class ModalActividadesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Actividades) { }

  ngOnInit(): void {
  }

}
