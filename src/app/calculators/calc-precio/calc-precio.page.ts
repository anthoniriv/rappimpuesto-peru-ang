import { Component, OnInit } from '@angular/core';
import {
  maskitoNumberOptionsGenerator,
  maskitoParseNumber,
} from '@maskito/kit';

@Component({
  selector: 'app-calc-precio',
  templateUrl: './calc-precio.page.html',
  styleUrls: ['./calc-precio.page.scss'],
})
export class CalcPrecioPage implements OnInit {
  protected readonly maskito = maskitoNumberOptionsGenerator({
    decimalSeparator: '.',
    thousandSeparator: ',',
    precision: 2,
  });

  compras: any = '';
  gastos: any = '';
  ganancia1: any = '';
  igv: any = '';
  precio: any = '';
  ganancia2: any = '';
  igvfinal: any = '';
  showPopover: boolean = false;
  popoverContent: string = '';
  alertButtons = ['Entendido'];

  handleInfoClick(content: any) {
    this.popoverContent = content;
    this.showPopover = true;
  }
  normalizeAndFormat(value: string): string {
    const normalizedValue = this.parseValue(value);
    return this.formatValue(normalizedValue);
  }

  parseValue(value: string): number {
    return parseFloat(value.replace(',', '.'));
  }

  formatValue(value: number): string {
    return value.toFixed(2).replace('.', ',');
  }

  handleChangeCompras(value: any) {
    this.compras = value.value;
    this.calcularIGV(value.value, this.gastos, this.ganancia1);
  }

  handleChangeGastos(value: any) {
    this.gastos = value.value;
    this.calcularIGV(this.compras, value.value, this.ganancia1);
  }

  handleChangeGanancia1(value: any) {
    this.ganancia1 = value.value;
    this.calcularIGV(this.compras, this.gastos, value.value);
  }

  calcularIGV(compras: any, gastos: any, ganancia1: any) {
    if (
      compras !== '' &&
      compras !== undefined &&
      gastos !== '' &&
      gastos !== undefined &&
      ganancia1 !== '' &&
      ganancia1 !== undefined &&
      !isNaN(maskitoParseNumber(compras)) &&
      !isNaN(maskitoParseNumber(gastos)) &&
      !isNaN(maskitoParseNumber(ganancia1))
    ) {
      console.log('Calculando IGV', compras, gastos, ganancia1);

      const compras1 = maskitoParseNumber(compras);
      const gastos1 = maskitoParseNumber(gastos);
      const ganancia11 = maskitoParseNumber(ganancia1);

      console.log('valores', compras1, gastos1, ganancia1);
      const total = compras1 + gastos1 + ganancia11;
      console.log('Total: ' + total);
      const igvCalculado = total * 0.18;
      this.igv = igvCalculado.toFixed(2);
      console.log('IGV: ' + this.igv);

      const precioCalculado = total + igvCalculado;
      this.precio = precioCalculado.toFixed(2);
      console.log('Precio: ' + this.precio);

      const creditoFiscalBase = compras1 / 1.18;
      console.log('Credito Fiscal Base: ' + creditoFiscalBase);
      const creditoFiscal = compras1 - creditoFiscalBase;
      console.log('Credito Fiscal: ' + creditoFiscal);
      let ganancia2Calculada = creditoFiscal;
      //convertir en positivo si es negativo
      if (ganancia2Calculada < 0) {
        ganancia2Calculada = ganancia2Calculada * -1;
      }
      this.ganancia2 = ganancia2Calculada.toFixed(2);
      console.log('Precio: ' + this.precio);
      console.log('Ganancia2: ' + this.ganancia2);
      //IGV FINAL let ganancia2Calculada = creditoFiscal - parseFloat(this.igv);
      let igvFinalCalculada = creditoFiscal - this.igv;
      if (igvFinalCalculada < 0) {
        igvFinalCalculada = igvFinalCalculada * -1;
      }
      this.igvfinal = igvFinalCalculada.toFixed(2);
    } else {
      this.igv = '';
      this.precio = '';
      this.ganancia2 = '';
      this.igvfinal = '';
    }
  }

  handleReset() {
    this.compras = '';
    this.gastos = '';
    this.ganancia1 = '';
    this.igv = '';
    this.precio = '';
    this.ganancia2 = '';
    this.igvfinal = '';
  }

  ngOnInit() {
    // Initialization code here
    console.log('CalcPrecioPage initialized');
  }
}
