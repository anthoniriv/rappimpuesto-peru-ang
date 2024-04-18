import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorsPage } from './calculators.page';

describe('CalculatorsPage', () => {
  let component: CalculatorsPage;
  let fixture: ComponentFixture<CalculatorsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
