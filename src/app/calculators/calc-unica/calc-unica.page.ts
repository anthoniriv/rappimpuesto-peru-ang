import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-unica',
  templateUrl: './calc-unica.page.html',
  styleUrls: ['./calc-unica.page.scss'],
})
export class CalcUnicaPage implements OnInit {
  venta: string = "00,00";
  igv: string = "00,00";
  total: string = "00,00";

  isTouchedVenta = false;
  isTouchedIgv = false;
  isTouchedTotal = false;

  constructor() {}

  ngOnInit() {
    this.clearAll();
  }

  clearAll() {
    this.venta = "00,00";
    this.igv = "00,00";
    this.total = "00,00";
    this.isTouchedVenta = false;
    this.isTouchedIgv = false;
    this.isTouchedTotal = false;
  }

  getVenta(valor: string) {
    this.venta = this.normalizeAndFormat(valor);
    this.calculateFigures();
  }
  
  getIgv(valor: string) {
    this.igv = this.normalizeAndFormat(valor);
    this.calculateFigures();
  }
  
  getTotal(valor: string) {
    this.total = this.normalizeAndFormat(valor);
    this.calculateFigures();
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
  

  focusInputVenta() {
    this.isTouchedVenta = true;
    this.isTouchedIgv = false;
    this.isTouchedTotal = false;
  }

  focusInputIgv() {
    this.isTouchedIgv = true;
    this.isTouchedVenta = false;
    this.isTouchedTotal = false;
  }

  focusInputTotal() {
    this.isTouchedTotal = true;
    this.isTouchedVenta = false;
    this.isTouchedIgv = false;
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

  calculateFigures() {
    const ventaNumber = this.parseValue(this.venta);
    const igvNumber = this.parseValue(this.igv);
    if (!isNaN(ventaNumber) && !isNaN(igvNumber)) {
      this.igv = this.formatValue(ventaNumber * 0.18);
      this.total = this.formatValue(ventaNumber + ventaNumber * 0.18);
    }
  }

 

  reset() {
    this.clearAll();
  }
}
