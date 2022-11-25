import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NogalComponent } from './nogal.component';

describe('NogalComponent', () => {
  let component: NogalComponent;
  let fixture: ComponentFixture<NogalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NogalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NogalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
