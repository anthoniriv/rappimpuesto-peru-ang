import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CronogramaPage } from './cronograma.page';

describe('CronogramaPage', () => {
  let component: CronogramaPage;
  let fixture: ComponentFixture<CronogramaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CronogramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
