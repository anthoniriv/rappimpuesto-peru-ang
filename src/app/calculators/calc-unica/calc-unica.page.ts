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
    //borrar la coma
    console.log('getVenta', valor.value);
    this.venta = maskitoParseNumber(valor.value);
    console.log('getVenta', valor);
    console.log('getVenta', this.venta);
    this.calculateFigures();
    this.focusInputVenta();
  }

  getIgv(valor: any) {
    // If IGV is manually changed, we might not want to recalculate it automatically.
    this.igv = Number(valor);
    this.focusInputIgv();
  }

  getTotal(valor: any) {
    this.total = Number(valor);
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
    //this.venta recibe 10 000 000 conviertelo a 10000000
    const ventaNumber = this.venta;
    console.log('calculateFigures', ventaNumber);
    // Calculate IGV based on the venta if venta input is the last touched.
    const igvCalculated = ventaNumber * 0.18;
    this.igv = igvCalculated.toFixed(2);
    const calculo = ventaNumber + igvCalculated;
    this.total = calculo.toFixed(2);
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
