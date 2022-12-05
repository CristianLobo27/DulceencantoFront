import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNogalComponent } from './modal-nogal.component';

describe('ModalNogalComponent', () => {
  let component: ModalNogalComponent;
  let fixture: ComponentFixture<ModalNogalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNogalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNogalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
