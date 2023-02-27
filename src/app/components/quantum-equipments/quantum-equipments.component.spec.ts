import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantumEquipmentsComponent } from './quantum-equipments.component';

describe('QuantumEquipmentsComponent', () => {
  let component: QuantumEquipmentsComponent;
  let fixture: ComponentFixture<QuantumEquipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantumEquipmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantumEquipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
