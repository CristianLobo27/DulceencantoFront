import { Component, Inject, OnInit } from '@angular/core';
import { Almendro } from '../../../../models/almendro';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-nogal',
  templateUrl: './modal-nogal.component.html',
  styleUrls: ['./modal-nogal.component.css']
})
export class ModalNogalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Almendro) { }

  ngOnInit(): void {
  }

}
