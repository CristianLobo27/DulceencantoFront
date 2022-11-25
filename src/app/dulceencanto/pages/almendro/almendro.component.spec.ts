import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmendroComponent } from './almendro.component';

describe('AlmendroComponent', () => {
  let component: AlmendroComponent;
  let fixture: ComponentFixture<AlmendroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmendroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlmendroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
