import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalcCuartaPage } from './calc-cuarta.page';

describe('CalcCuartaPage', () => {
  let component: CalcCuartaPage;
  let fixture: ComponentFixture<CalcCuartaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcCuartaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
