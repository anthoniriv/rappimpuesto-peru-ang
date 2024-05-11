import { Component, OnInit } from '@angular/core';
import {
  maskitoNumberOptionsGenerator,
  maskitoParseNumber,
} from '@maskito/kit';

@Component({
  selector: 'app-calc-anual1',
  templateUrl: './calc-anual1.page.html',
  styleUrls: ['./calc-anual1.page.scss'],
})
export class CalcAnual1Page implements OnInit {
  protected readonly maskito = maskitoNumberOptionsGenerator({
    decimalSeparator: '.',
    thousandSeparator: ',',
    precision: 2,
  });

  venta: any;
  igv: any;
  total: any;

  compras: any;
  igv_compras: any;
  creditofiscal: any;
  total_compras: any;

  credito_mesanterior: any;
  total_mesanteriorTot: any;

  igv_pagar: any;
  renta_factor: any;
  detracion: any;

  selected: any;
  regimen: any;
  RER: any;
  RMT: any;
  RG: any;

  isTouchedVenta: boolean = false;
  isTouchedIgv: boolean = false;
  isTouchedTotal: boolean = false;

  isTouchedCompras: boolean = false;
  isTouchedCredt: boolean = false;
  isTouchedtotal_mesanteriorTot: boolean = false;

  options = [
    {
      regimen: 'Régimen Especial de Renta',
    },
    {
      regimen: 'Régimen MYPE Tributario',
    },
    {
      regimen: 'Régimen General',
    },
  ];
  constructor() {}

  ngOnInit() {
    this.clearAll();
  }

  //
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
  clearAll() {
    this.venta = '';
    this.igv = '';
    this.total = '';
    this.compras = '';
    this.creditofiscal = '';
    this.total_compras = '';
    this.credito_mesanterior = '';
    this.total_mesanteriorTot = '';
  }

  getVenta(valor: any) {
    if ((this.isTouchedVenta = true)) {
      this.venta = maskitoParseNumber(valor.value);
      this.calcIgv();
      this.calcTotal();
      //Conditional to check if venta is NaN
      if (isNaN(this.venta)) {
        this.igv = '';
        this.total = '';
        this.venta = '';
      }
    }
  }

  getCompra(valor: any) {
    if ((this.isTouchedCompras = true)) {
      this.compras = maskitoParseNumber(valor.value);
      // this.calcCredito();
      this.calcTotalCompras();
      this.calcIgvPagar();
      //Conditional to check if venta is NaN
      if (isNaN(this.compras)) {
        this.creditofiscal = '';
        this.total_compras = '';
        this.compras = '';
      }
    }
  }

  getCredtMes(valor: any) {
    if ((this.isTouchedCredt = true)) {
      this.credito_mesanterior = maskitoParseNumber(valor.value);
      this.calcIgvPagar();
      this.calcTotalMesAnterior1();
      if (isNaN(this.credito_mesanterior)) {
        this.credito_mesanterior = '';
        this.total_mesanteriorTot = '';
      }
    }
  }

  calcTotalMesAnterior1() {
    if ((this.isTouchedCredt = true)) {
      var numTotal = (this.credito_mesanterior * 100) / 18;
      numTotal = numTotal + this.credito_mesanterior;
      numTotal = this.round(numTotal);
      this.total_mesanteriorTot = numTotal;
    }
  }

  calcTotalMesAnterior2(valor: any) {
    if ((this.isTouchedtotal_mesanteriorTot = true)) {
      this.total_mesanteriorTot = maskitoParseNumber(valor.value);
      var numIGV = this.total_mesanteriorTot * 0.18;
      numIGV = this.round(numIGV);
      this.credito_mesanterior = numIGV;
      this.calcIgvPagar();
      if (isNaN(this.total_mesanteriorTot)) {
        this.credito_mesanterior = '';
        this.total_mesanteriorTot = '';
      }
    }
  }
  getIgv(valor: any) {
    if ((this.isTouchedIgv = true)) {
      this.igv = maskitoParseNumber(valor.value);
      this.calcularValorBase2();
      this.calcTotal();
      //Conditional to check if venta is NaN
      if (isNaN(this.igv)) {
        this.venta = '';
        this.total = '';
        this.igv = '';
      }
    }
  }

  getTotal(valor: any) {
    if ((this.isTouchedTotal = true)) {
      this.total = maskitoParseNumber(valor.value);
      this.calcularValorBase();
      this.calcIgv();
      //Conditional to check if venta is NaN
      if (isNaN(this.total)) {
        this.venta = '';
        this.igv = '';
        this.total = '';
      }
    }
  }
  //Change Color Functions
  focusInputVenta(input: any) {
    this.isTouchedIgv = false;
    this.isTouchedTotal = false;
    this.isTouchedVenta = true;
  }

  focusInputIgv(input: any) {
    this.isTouchedIgv = true;
    this.isTouchedTotal = false;
    this.isTouchedVenta = false;
  }

  focusInputTotal(input: any) {
    this.isTouchedTotal = true;
    this.isTouchedVenta = false;
    this.isTouchedIgv = false;
  }

  focusInputCompras(input: any) {
    this.isTouchedTotal = false;
    this.isTouchedVenta = false;
    this.isTouchedIgv = false;
    this.isTouchedCompras = true;
  }

  focusInputCredt(input: any) {
    this.isTouchedTotal = false;
    this.isTouchedVenta = false;
    this.isTouchedIgv = false;
    this.isTouchedCompras = false;
    this.isTouchedCredt = true;
    // document.getElementById(`${input}`).style.border = "solid 2px #203680";
  }

  focusInputCredtTot(input: any) {
    this.isTouchedTotal = false;
    this.isTouchedVenta = false;
    this.isTouchedIgv = false;
    this.isTouchedCompras = false;
    this.isTouchedCredt = false;
    this.isTouchedtotal_mesanteriorTot = true;
    // document.getElementById(`${input}`).style.border = "solid 2px #203680";
  }

  unfocusInputVenta(input: any) {
    this.isTouchedVenta = false;
  }

  unfocusInputIgv(input: any) {
    this.isTouchedIgv = false;
  }
  unfocusInputTotal(input: any) {
    this.isTouchedTotal = false;
  }
  unfocusInputCompras(input: any) {
    this.isTouchedCompras = false;
  }
  unfocusInputCredt(input: any) {
    this.isTouchedCredt = false;
  }

  unfocusInputCredtTot(input: any) {
    this.total_mesanteriorTot = false;
  }

  calcIgv() {
    var igv = this.venta * 0.18;
    igv = this.round(igv);
    this.igv = igv;
  }

  calcCredito() {
    var credito = this.compras * 0.18;
    credito = this.round(credito);
    this.creditofiscal = credito;
  }

  calcTotal() {
    var total = this.venta + this.igv;
    this.total = total.toString();
  }

  calcTotalCompras() {
    var comprasTotal = this.compras / 1.18;
    var creditoFiscal1 = comprasTotal * 0.18;
    this.creditofiscal = this.round(creditoFiscal1);
    comprasTotal = this.round(comprasTotal);
    this.total_compras = comprasTotal.toString();
  }

  calcularValorBase() {
    var valorBase = this.total / 1.18;
    valorBase = this.round(valorBase);
    this.venta = valorBase.toString();
  }

  calcIgvPagar() {
    var igv_pagar = this.igv - this.creditofiscal;
    if (isNaN(this.credito_mesanterior)) {
      igv_pagar = this.round(igv_pagar);
      this.igv_pagar = igv_pagar.toString();
    } else {
      var igv_pagar = this.igv - this.creditofiscal - this.credito_mesanterior;
      igv_pagar = this.round(igv_pagar);
      this.igv_pagar = igv_pagar.toString();
    }
  }
  //Function to round the values witouth using toFixed
  round(value: any) {
    return Math.round(value * 100) / 100;
  }

  calcularValorBase2() {
    var valorBase = (100 * this.igv) / 18;
    valorBase = this.round(valorBase);
    this.venta = valorBase;
  }

  reiniciar() {
    this.venta = '';
    this.igv = '';
    this.total = '';
    this.compras = '';
    this.creditofiscal = '';
    this.total_compras = '';
    this.igv_pagar = '';
    this.credito_mesanterior = '';
    this.total_mesanteriorTot = '';
    this.isTouchedVenta = false;
    this.isTouchedIgv = false;
    this.isTouchedTotal = false;
    this.isTouchedCompras = false;
    this.isTouchedCredt = false;
    this.isTouchedtotal_mesanteriorTot = false;
    this.selected = 'default';
  }

  //get the 1.5 of a value
  get1_5() {
    var valor = this.venta * 0.015;
    valor = this.round(valor);
    return valor;
  }

  get1() {
    var valor = this.venta * 0.01;
    valor = this.round(valor);
    return valor;
  }

  regimenChange($event: any) {
    this.selected = $event.target.value;
    if (this.selected == 'RER') {
      this.regimen = this.get1_5();
    }
    if (this.selected == 'RMT') {
      this.regimen = this.get1();
    }
    if (this.selected == 'RG') {
      this.regimen = this.get1_5();
    }
    if (this.selected == 'default') {
      this.regimen = '';
    }
  }
}
