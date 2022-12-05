import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlmendroComponent } from './modal-almendro.component';

describe('ModalAlmendroComponent', () => {
  let component: ModalAlmendroComponent;
  let fixture: ComponentFixture<ModalAlmendroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAlmendroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAlmendroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
