import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-rentabilidad',
  templateUrl: './calc-rentabilidad.page.html',
  styleUrls: ['./calc-rentabilidad.page.scss'],
})
export class CalcRentabilidadPage implements OnInit {
  costoValue: any = "";
  porcentajeGanarValue: any = "";
  gananciaValue: any = "";

  handleCostoValue(value: any) {
    this.costoValue = value;
    this.handleGananciaValue(value, this.porcentajeGanarValue);
    console.log("Venta value:", value);
  }

  handlePorcentajeGanarValue(value: any) {
    this.porcentajeGanarValue = value;
    this.handleGananciaValue(this.costoValue, value);
    console.log("IGV value:", value);
  }

  handleGananciaValue(costo: string, porcentajeGanar: string) {
    const costoFloat = parseFloat(costo);
    const porcentajeGanarFloat = parseFloat(porcentajeGanar);

    if (
      costo !== "" &&
      !isNaN(costoFloat) &&
      porcentajeGanar !== "" &&
      !isNaN(porcentajeGanarFloat)
    ) {
      console.log("Costo:", costoFloat);
      console.log("Porcentaje de ganancia:", porcentajeGanarFloat);
      let porcentaje = porcentajeGanarFloat / 100;
      console.log("Porcentaje:", porcentaje);
      let division = 1 - porcentaje;
      console.log("Division:", division);
      const ganancia = costoFloat / division;
      console.log("ganancia value:", ganancia);
      this.gananciaValue = ganancia.toFixed(2);
      console.log("Total value:", ganancia.toFixed(2));
    } else {
      this.gananciaValue = "";
      console.log("Costo y porcentaje de ganancia deben ser números válidos.");
    }
  }

  reset() {
    this.costoValue = "";
    this.porcentajeGanarValue = "";
    this.gananciaValue = "";
    console.log("Reset button clicked");
  }

  ngOnInit() {
    // Initialization code here
    console.log("CalcRentabilidadPage initialized");
  }
}
