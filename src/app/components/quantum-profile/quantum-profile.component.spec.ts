import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantumProfileComponent } from './quantum-profile.component';

describe('QuantumProfileComponent', () => {
  let component: QuantumProfileComponent;
  let fixture: ComponentFixture<QuantumProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantumProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantumProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
