import { Component, OnInit } from '@angular/core';
import { MaskitoDirective } from '@maskito/angular';
import type { MaskitoElementPredicate, MaskitoOptions } from '@maskito/core';

import mask from './../masks';
import {
  maskitoNumberOptionsGenerator,
  maskitoParseNumber,
} from '@maskito/kit';

@Component({
  selector: 'app-calc-unica',
  templateUrl: './calc-unica.page.html',
  styleUrls: ['./calc-unica.page.scss'],
})
export class CalcUnicaPage implements OnInit {
  protected readonly maskito = maskitoNumberOptionsGenerator({
    decimalSeparator: '.',
    thousandSeparator: ',',
    precision: 2,
  });

  venta: any = '';
  igv: any = '';
  total: any = '';

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
    this.resetTouches();
  }

  getVenta(valor: any) {
    this.venta = maskitoParseNumber(valor.value);
    this.calculateFigures();
    this.focusInputVenta();
  }

  getIgv(valor: any) {
    this.igv = maskitoParseNumber(valor.value);
    this.calcularValorBase2();
    this.calculateFigures();
    this.focusInputIgv();
  }

  getTotal(valor: any) {
    this.total = maskitoParseNumber(valor.value);
    this.calcularValorBase();
    this.calcIgv();
    this.focusInputTotal();
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

  calculateFigures() {
    const ventaNumber = this.venta;
    const igvCalculated = ventaNumber * 0.18;
    this.igv = igvCalculated.toFixed(2);
    const calculo = ventaNumber + igvCalculated;
    this.total = calculo.toFixed(2);
  }

  calcIgv() {
    let igv = this.venta * 0.18;
    igv = Math.round(igv * 100) / 100;
    this.igv = igv;
  }

  calcularValorBase() {
    let valorBase = this.total / 1.18;
    valorBase = Math.round(valorBase * 100) / 100;
    this.venta = valorBase.toString();
  }

  calcularValorBase2() {
    let valorBase = (100 * this.igv) / 18;
    valorBase = Math.round(valorBase * 100) / 100;
    this.venta = valorBase;
  }

  focusInputVenta() {
    this.isTouchedVenta = true;
  }

  focusInputIgv() {
    this.isTouchedIgv = true;
  }

  focusInputTotal() {
    this.isTouchedTotal = true;
  }

  unfocusInputVenta() {
    this.isTouchedVenta = false;
  }

  unfocusInputIgv() {
    this.isTouchedIgv = false;
  }

  unfocusInputTotal() {
    this.isTouchedTotal = false;
  }

  resetTouches() {
    this.isTouchedVenta = false;
    this.isTouchedIgv = false;
    this.isTouchedTotal = false;
  }

  reset() {
    this.clearAll();
  }
}
