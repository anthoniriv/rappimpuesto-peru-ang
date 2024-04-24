import { Component, OnInit } from '@angular/core';
import { maskitoNumberOptionsGenerator, maskitoParseNumber } from '@maskito/kit';

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
    console.log('Venta value:', value.value);
  }

  handlePorcentajeGanarValue(value: any) {
    this.porcentajeGanarValue = maskitoParseNumber(value.value);
    this.handleGananciaValue(this.costoValue, this.porcentajeGanarValue);
    console.log('IGV value:', value.value);
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
      console.log('Costo:', costoFloat);
      console.log('Porcentaje de ganancia:', porcentajeGanarFloat);
      let porcentaje = porcentajeGanarFloat / 100;
      console.log('Porcentaje:', porcentaje);
      let division = 1 - porcentaje;
      console.log('Division:', division);
      const ganancia = costoFloat / division;
      console.log('ganancia value:', ganancia);
      this.totalCobrarValue = ganancia.toFixed(2).replace('.', ',');
      this.gananciaValue = (ganancia - costoFloat).toFixed(2).replace('.', ',');
      console.log('Total value:', this.gananciaValue);
    } else {
      this.totalCobrarValue = '';
      this.gananciaValue = '';
      console.log('Costo y porcentaje de ganancia deben ser números válidos.');
    }
  }

  reset() {
    this.costoValue = '';
    this.porcentajeGanarValue = '';
    this.gananciaValue = '';
    console.log('Reset button clicked');
  }

  ngOnInit() {
    // Initialization code here
    console.log('CalcRentabilidadPage initialized');
  }
}
