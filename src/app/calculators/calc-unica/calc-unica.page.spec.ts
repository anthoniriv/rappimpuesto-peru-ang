import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalcUnicaPage } from './calc-unica.page';

describe('CalcUnicaPage', () => {
  let component: CalcUnicaPage;
  let fixture: ComponentFixture<CalcUnicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcUnicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
