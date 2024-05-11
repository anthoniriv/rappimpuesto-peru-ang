import { Component, OnInit } from '@angular/core';
import {
  maskitoNumberOptionsGenerator,
  maskitoParseNumber,
} from '@maskito/kit';

@Component({
  selector: 'app-calc-cuarta',
  templateUrl: './calc-cuarta.page.html',
  styleUrls: ['./calc-cuarta.page.scss'],
})
export class CalcCuartaPage implements OnInit {
  protected readonly maskito = maskitoNumberOptionsGenerator({
    decimalSeparator: '.',
    thousandSeparator: ',',
    precision: 2,
  });

  venta: any;
  igv: any;
  total: any;

  isTouchedVenta: boolean = false;
  isTouchedIgv: boolean = false;
  isTouchedTotal: boolean = false;

  checked1: any;
  checked2: any;

  constructor() {}

  ngOnInit() {
    this.clearAll();
  }
  //Use clearall function to clear all the values in the calculator

  //Function to clear all the values
  clearAll() {
    this.venta = '';
    this.igv = '';
    this.total = '';
  }

  //Get Data Functions

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

  unfocusInputVenta(input: any) {
    this.isTouchedVenta = false;
  }

  unfocusInputIgv(input: any) {
    this.isTouchedIgv = false;
  }
  unfocusInputTotal(input: any) {
    this.isTouchedTotal = false;
  }
  //Calculator Functions
  calcIgv() {
    var igv = this.venta * 0.08;
    igv = this.round(igv);
    this.igv = igv;
  }

  changeIGV() {
    this.igv = 0;
  }
  calcTotal() {
    var total = this.venta - this.igv;
    this.total = total.toString();
    // this.total = this.venta += this.igv;
  }

  calcularValorBase() {
    var valorBase = this.total * 1.08;
    valorBase = this.round(valorBase);
    this.venta = valorBase.toString();
  }

  //Function to round the values witouth using toFixed
  round(value: any) {
    return Math.round(value * 100) / 100;
  }

  calcularValorBase2() {
    var valorBase = (100 * this.igv) / 8;
    valorBase = this.round(valorBase);
    this.venta = valorBase;
  }

  cuartaCheck(e: { target: any }) {
    var checkbox = e.target;
    this.checked1 = checkbox.checked;
    if (this.checked1) {
      if (this.venta > 1500) {
        this.changeIGV();
        this.calcTotal();
      }
      if (this.venta < 1500) {
        this.changeIGV();
        this.calcTotal();
      }
    }
    if (this.checked2 == true && this.checked1 == true) {
      this.calcIgv();
      this.calcTotal();
    }
    if (this.checked2 == false && this.checked1 == true) {
      if (this.venta > 1500) {
        this.changeIGV();
        this.calcTotal();
      }
      if (this.venta < 1500) {
        this.changeIGV();
        this.calcTotal();
      }
    }
    if (this.checked2 == false && this.checked1 == false) {
      if (this.venta > 1500) {
        this.calcIgv();
        this.calcTotal();
      }
      if (this.venta < 1500) {
        this.changeIGV();
        this.calcTotal();
      }
    }
    if (this.checked1 == false) {
      if (this.venta > 1500) {
        this.calcIgv();
        this.calcTotal();
      }
      if (this.venta < 1500) {
        this.changeIGV();
        this.calcTotal();
      }
    }
  }

  superarCheck(e: { target: any }) {
    var checkbox = e.target;
    this.checked2 = checkbox.checked;
    if (this.checked2) {
      this.calcIgv();
      this.calcTotal();
    }
    if (this.checked2 == true && this.checked1 == true) {
    }
    if (this.checked2 == false && this.checked1 == true) {
    }
    if (this.checked2 == false && this.checked1 == false) {
      if (this.venta > 1500) {
        this.calcIgv();
        this.calcTotal();
      }
      if (this.venta < 1500) {
        this.changeIGV();
        this.calcTotal();
      }
    }
    if (this.checked2 == false) {
      this.changeIGV();
      this.calcTotal();
    }
  }
}
