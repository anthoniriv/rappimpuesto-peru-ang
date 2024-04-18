import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalcAnual2Page } from './calc-anual2.page';

describe('CalcAnual2Page', () => {
  let component: CalcAnual2Page;
  let fixture: ComponentFixture<CalcAnual2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcAnual2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
