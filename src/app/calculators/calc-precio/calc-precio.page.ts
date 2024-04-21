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

  handleChangeCompras(value: any) {
    this.compras = value;
    this.calcularIGV(value, this.gastos, this.ganancia1);
  }

  handleChangeGastos(value: any) {
    this.gastos = value;
    this.calcularIGV(this.compras, value, this.ganancia1);
  }

  handleChangeGanancia1(value: any) {
    this.ganancia1 = value;
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
        parseFloat(compras) + parseFloat(gastos) + parseFloat(ganancia1);
      const igvCalculado = total * 0.18;
      this.igv = igvCalculado.toFixed(2);

      const precioCalculado = total + igvCalculado;
      this.precio = precioCalculado.toFixed(2);

      const creditoFiscalBase = parseFloat(compras) / 1.18;
      console.log('Credito Fiscal Base: ' + creditoFiscalBase);
      const creditoFiscal = parseFloat(compras) - creditoFiscalBase;
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
      let igvFinalCalculada = creditoFiscal - parseFloat(this.igv);
      this.igvfinal = igvFinalCalculada.toFixed(2);
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
