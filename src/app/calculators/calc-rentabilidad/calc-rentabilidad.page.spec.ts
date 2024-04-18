import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalcRentabilidadPage } from './calc-rentabilidad.page';

describe('CalcRentabilidadPage', () => {
  let component: CalcRentabilidadPage;
  let fixture: ComponentFixture<CalcRentabilidadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcRentabilidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
