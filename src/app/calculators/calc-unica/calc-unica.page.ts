import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-unica',
  templateUrl: './calc-unica.page.html',
  styleUrls: ['./calc-unica.page.scss'],
})
export class CalcUnicaPage implements OnInit {
  venta: string = "";
  igv: string = "";
  total: string = "";

  isTouchedVenta = false;
  isTouchedIgv = false;
  isTouchedTotal = false;

  constructor() {}

  ngOnInit() {
    this.clearAll();
  }

  clearAll() {
    this.venta = "";
    this.igv = "";
    this.total = "";
    this.resetTouches();
  }

  getVenta(valor: string) {
    this.venta = this.normalizeAndFormat(valor);
    this.calculateFigures();
    this.focusInputVenta();
  }
  
  getIgv(valor: string) {
    // If IGV is manually changed, we might not want to recalculate it automatically.
    this.igv = this.normalizeAndFormat(valor);
    this.focusInputIgv();
  }
  
  getTotal(valor: string) {
    this.total = this.normalizeAndFormat(valor);
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
    const ventaNumber = this.parseValue(this.venta);
    // Calculate IGV based on the venta if venta input is the last touched.
    if (this.isTouchedVenta) {
      const igvCalculated = ventaNumber * 0.18;
      this.igv = this.formatValue(igvCalculated);
      this.total = this.formatValue(ventaNumber + igvCalculated);
    }
  }

  focusInputVenta() {
    this.resetTouches();
    this.isTouchedVenta = true;
  }

  focusInputIgv() {
    this.resetTouches();
    this.isTouchedIgv = true;
  }

  focusInputTotal() {
    this.resetTouches();
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
