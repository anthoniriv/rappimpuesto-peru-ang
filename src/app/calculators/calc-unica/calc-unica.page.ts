import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-unica',
  templateUrl: './calc-unica.page.html',
  styleUrls: ['./calc-unica.page.scss'],
})
export class CalcUnicaPage implements OnInit {
  venta: any;
  igv: any;
  total: any;

  isTouchedVenta = false;
  isTouchedIgv = false;
  isTouchedTotal = false;

  constructor() {}

  ngOnInit() {
    this.clearAll();
  }

  clearAll() {
    this.venta = '';
    this.igv = '';
    this.total = '';
  }

  getVenta(valor: any) {
    this.venta = parseFloat(valor.replace(',', '.'));
    this.isTouchedVenta = true;
    this.calcIgv();
    this.calcTotal();
    if (isNaN(this.venta)) {
      this.clearAll();
    }
  }

  getIgv(valor: any) {
    this.igv = parseFloat(valor.replace(',', '.'));
    this.isTouchedIgv = true;
    this.calcularValorBase2();
    this.calcTotal();
    if (isNaN(this.igv)) {
      this.clearAll();
    }
  }

  getTotal(valor: any) {
    this.total = parseFloat(valor.replace(',', '.'));
    this.isTouchedTotal = true;
    this.calcularValorBase();
    this.calcIgv();
    if (isNaN(this.total)) {
      this.clearAll();
    }
  }

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

  unfocusInputVenta(input: any) {
    this.isTouchedVenta = false;
  }

  unfocusInputIgv(input: any) {
    this.isTouchedIgv = false;
  }

  unfocusInputTotal(input: any) {
    this.isTouchedTotal = false;
  }

  calcIgv() {
    if (this.venta) {
      let igv = this.venta * 0.18;
      this.igv = this.round(igv);
    }
  }
  
  calcTotal() {
    if (this.venta && this.igv) {
      const total = parseFloat(this.venta) + parseFloat(this.igv);
      this.total = this.round(total);
    }
  }
  
  calcularValorBase() {
    if (this.total) {
      let valorBase = this.total / 1.18;
      this.venta = this.round(valorBase);
    }
  }
  
  calcularValorBase2() {
    if (this.igv) {
      let valorBase = (100 * this.igv) / 18;
      this.venta = this.round(valorBase);
    }
  }
  

  round(value: any) {
    return (Math.round(value * 100) / 100).toFixed(2).replace('.', ',');
  }

  reset() {
    this.clearAll();
  }
}
