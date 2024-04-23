import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-precio',
  templateUrl: './calc-precio.page.html',
  styleUrls: ['./calc-precio.page.scss'],
})
export class CalcPrecioPage implements OnInit {
  compras: string = '';
  gastos: string = '';
  ganancia1: string = '';
  igv: string = '';
  precio: string = '';
  ganancia2: string = '';
  igvfinal: string = '';
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

  handleChangeCompras(value: string) {
    this.compras = this.normalizeAndFormat(value);
    this.calcularIGV(value, this.gastos, this.ganancia1);
  }

  handleChangeGastos(value: string) {
    this.gastos = this.normalizeAndFormat(value);
    this.calcularIGV(this.compras, value, this.ganancia1);
  }

  handleChangeGanancia1(value: string) {
    this.ganancia1 = this.normalizeAndFormat(value);
    this.calcularIGV(this.compras, this.gastos, value);
  }

  calcularIGV(compras: string, gastos: string, ganancia1: string) {
    if (
      compras !== '' &&
      compras !== undefined &&
      gastos !== '' &&
      gastos !== undefined &&
      ganancia1 !== '' &&
      ganancia1 !== undefined
    ) {
      const total =
        this.parseValue(compras) +
        this.parseValue(gastos) +
        this.parseValue(ganancia1);
      const igvCalculado = total * 0.18;
      this.igv = this.formatValue(igvCalculado);

      const precioCalculado = total + igvCalculado;
      this.precio = this.formatValue(precioCalculado);

      const creditoFiscalBase = this.parseValue(compras) / 1.18;
      console.log('Credito Fiscal Base: ' + creditoFiscalBase);
      const creditoFiscal = this.parseValue(compras) - creditoFiscalBase;
      console.log('Credito Fiscal: ' + creditoFiscal);
      let ganancia2Calculada = creditoFiscal;
      //convertir en positivo si es negativo
      if (ganancia2Calculada < 0) {
        ganancia2Calculada = ganancia2Calculada * -1;
      }
      this.ganancia2 = this.formatValue(ganancia2Calculada);
      console.log('Precio: ' + this.precio);
      console.log('Ganancia2: ' + this.ganancia2);
      //IGV FINAL let ganancia2Calculada = creditoFiscal - parseFloat(this.igv);
      let igvFinalCalculada = creditoFiscal - this.parseValue(this.igv);
      if (igvFinalCalculada < 0) {
        igvFinalCalculada = igvFinalCalculada * -1;
      }
      this.igvfinal = this.formatValue(igvFinalCalculada);
    } else {
      this.igv = '';
      this.precio = '';
      this.ganancia2 = '';
    }
  }

  handleReset() {
    this.compras = '';
    this.gastos = '';
    this.ganancia1 = '';
    this.igv = '';
    this.precio = '';
    this.ganancia2 = '';
  }

  ngOnInit() {
    // Initialization code here
    console.log('CalcPrecioPage initialized');
  }
}
