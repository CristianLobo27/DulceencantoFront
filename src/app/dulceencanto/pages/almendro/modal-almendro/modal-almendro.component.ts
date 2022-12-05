import { Component, Inject, OnInit } from '@angular/core';
import { Almendro } from '../../../../models/almendro';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-almendro',
  templateUrl: './modal-almendro.component.html',
  styleUrls: ['./modal-almendro.component.css']
})
export class ModalAlmendroComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Almendro) { }

  ngOnInit(): void {
  }

}
