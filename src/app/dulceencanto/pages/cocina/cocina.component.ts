import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { Cocina } from '../../../models/cocina';
import { CocinaService } from '../../../services/CocinaService/cocina.service';
import { ModalComponent } from './modal/modal.component';
import { ReservaService } from '../../../services/ReservaService/reserva.service';
import { Reserva } from '../../../models/reserva';
import { Comidas } from '../../../models/comidas';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from "uuid";
import { BusquedaService } from '../../../services/CocinaService/busqueda.service';

interface Fecha{
  dia: string,
  mes: string,
  anio: string
}

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css']
})
export class CocinaComponent implements OnInit {

  public cocinas: Cocina[] = [];
  public cocina!: Cocina;
  public dia!: string;
  public mes!: string;
  public anio!: string;
  fecha: Date=new Date();
  public comida: Comidas[]=[];



  constructor(private cocinaService: CocinaService, 
    private reservaService: ReservaService,
    private busquedaService: BusquedaService,
    public dialog: MatDialog) { }

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

  getFecha(){
    let fechaActual = new Date();
    this.dia = fechaActual.getDate().toString();
    this.mes = fechaActual.getMonth().toString();
    let anio = fechaActual.getFullYear().toString();
  }

  addEvent(event: MatDatepickerInputEvent<Date>){
    if(event.value!=null){
      this.fecha=event.value;
    }
  }

  async pedir(cocinilla: Cocina){
    const { value: cantidad } = await Swal.fire({
      title: cocinilla.tipo,
      input: 'number',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      showLoaderOnConfirm: true,
    })   
   
      const comidas: Comidas={id: cocinilla.id, tipo: cocinilla.tipo, cantidad: cantidad, precio: cocinilla.precio*cantidad};
      this.comida.push(comidas)
      console.log(comidas)

      this.busquedaService.buscarTipo(comidas.tipo)
      this.busquedaService.buscarCantidad(comidas.cantidad)
  }

  reservar(){
    const reserva: Reserva={id: uuidv4(), comida: this.comida, fecha: this.fecha.toString()}
    this.reservaService.registrarReserva(reserva).subscribe(data=>console.log(data))
  }

  get historial(){
    return this.busquedaService.historial;
  }

  get historialC(){
    return this.busquedaService.historialC;
  }

}

