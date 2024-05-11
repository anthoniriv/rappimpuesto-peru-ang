import { Component, OnInit } from '@angular/core';
import {
  maskitoNumberOptionsGenerator,
  maskitoParseNumber,
} from '@maskito/kit';

@Component({
  selector: 'app-calc-rentabilidad',
  templateUrl: './calc-rentabilidad.page.html',
  styleUrls: ['./calc-rentabilidad.page.scss'],
})
export class CalcRentabilidadPage implements OnInit {
  protected readonly maskito = maskitoNumberOptionsGenerator({
    decimalSeparator: '.',
    thousandSeparator: ',',
    precision: 2,
  });

  costoValue: any = '';
  porcentajeGanarValue: any = '';
  gananciaValue: any = '';
  totalCobrarValue: any = '';
  alertButtons = ['Entendido'];

  handleCostoValue(value: any) {
    this.costoValue = maskitoParseNumber(value.value);
    this.handleGananciaValue(this.costoValue, this.porcentajeGanarValue);
  }

  handlePorcentajeGanarValue(value: any) {
    this.porcentajeGanarValue = maskitoParseNumber(value.value);
    this.handleGananciaValue(this.costoValue, this.porcentajeGanarValue);
  }

  handleGananciaValue(costo: any, porcentajeGanar: any) {
    const costoFloat = costo;
    const porcentajeGanarFloat = porcentajeGanar;

    if (
      costo !== '' &&
      !isNaN(costoFloat) &&
      porcentajeGanar !== '' &&
      !isNaN(porcentajeGanarFloat)
    ) {
      let porcentaje = porcentajeGanarFloat / 100;
      let division = 1 - porcentaje;
      const ganancia = costoFloat / division;
      this.totalCobrarValue = ganancia.toFixed(2);
      this.gananciaValue = (ganancia - costoFloat).toFixed(2);
    } else {
      this.totalCobrarValue = '';
      this.gananciaValue = '';
    }
  }

  reset() {
    this.costoValue = '';
    this.porcentajeGanarValue = '';
    this.gananciaValue = '';
    this.totalCobrarValue = '';
  }

  ngOnInit() {
    // Initialization code here
  }
}
