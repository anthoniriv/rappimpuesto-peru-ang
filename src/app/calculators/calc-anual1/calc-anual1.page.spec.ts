import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalcAnual1Page } from './calc-anual1.page';

describe('CalcAnual1Page', () => {
  let component: CalcAnual1Page;
  let fixture: ComponentFixture<CalcAnual1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcAnual1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
