import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalcPrecioPage } from './calc-precio.page';

describe('CalcPrecioPage', () => {
  let component: CalcPrecioPage;
  let fixture: ComponentFixture<CalcPrecioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcPrecioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
