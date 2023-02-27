import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantumDropdownComponent } from './quantum-dropdown.component';

describe('QuantumDropdownComponent', () => {
  let component: QuantumDropdownComponent;
  let fixture: ComponentFixture<QuantumDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantumDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantumDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
