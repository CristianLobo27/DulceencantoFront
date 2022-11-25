import { Component, OnInit } from '@angular/core';
import { Nogal } from '../../../models/nogal';
import { NogalService } from '../../../services/NogalService/nogal.service';
import { AlmendroService } from '../../../services/AlmendroService/almendro.service';
import { Almendro } from '../../../models/almendro';

@Component({
  selector: 'app-apartamentos',
  templateUrl: './apartamentos.component.html',
  styleUrls: ['./apartamentos.component.css']
})
export class ApartamentosComponent implements OnInit {

  public nogal: Nogal[] = [];
  public almendro: Almendro[] = [];

  selectedIndexAlmendro=0;
  selectedIndexNogal=0;
  indicators=true;
  controls=true;
  autoSlideAlmendro= true;
  autoSlideNogal= true;
  slideInterval = 3000;

  constructor(private nogalService: NogalService,
    private almendroService: AlmendroService) { }

  ngOnInit(): void {
    this.getNogal();
    this.getAlmendro();
    if(this.autoSlideAlmendro){
      this.autoSlideImagesAlmendro();
    }
    if(this.autoSlideNogal){
      this.autoSlideImagesNogal();
    }
  }

  autoSlideImagesAlmendro(): void{
    setInterval(()=>{
      this.onNextClickAlmendro();
    }, this.slideInterval);
  }

  autoSlideImagesNogal(): void{
    setInterval(()=>{
      this.onNextClickNogal();
    }, this.slideInterval);
  }

  public getNogal(): void{
    this.nogalService.getNogal().subscribe(
      (response: Nogal[])=> {
        this.nogal=response;
      })
  }

  public getAlmendro(): void{
    this.almendroService.getAlmendro().subscribe(
      (response: Almendro[])=> {
        this.almendro=response;
      })
  }

  selectImageAlmendro(index: number): void{
    this.selectedIndexAlmendro= index;
  }

  selectImageNogal(index: number): void{
    this.selectedIndexNogal= index;
  }

  onPrevClickAlmendro(): void{
    if(this.selectedIndexAlmendro === 0){

        this.selectedIndexAlmendro= this.almendro.length-1;

    }else{
      this.selectedIndexAlmendro--;
    }
  }

  onNextClickAlmendro(): void{
    if(this.selectedIndexAlmendro === this.almendro.length -1){
        this.selectedIndexAlmendro= 0;
    }else{
      this.selectedIndexAlmendro++;
    }
  }

  onPrevClickNogal(): void{
    if(this.selectedIndexNogal === 0){

        this.selectedIndexNogal= this.nogal.length-1;

    }else{
      this.selectedIndexNogal--;
    }
  }

  onNextClickNogal(): void{
    if(this.selectedIndexNogal === this.nogal.length -1){
        this.selectedIndexNogal= 0;
    }else{
      this.selectedIndexNogal++;
    }
  }
}
