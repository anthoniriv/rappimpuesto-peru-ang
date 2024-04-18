import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CalculadorasPage } from './calculadoras.page';

describe('Tab1Page', () => {
  let component: CalculadorasPage;
  let fixture: ComponentFixture<CalculadorasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculadorasPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculadorasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
