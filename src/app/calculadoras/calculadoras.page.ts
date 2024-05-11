import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadoras',
  templateUrl: 'calculadoras.page.html',
  styleUrls: ['calculadoras.page.scss'],
})
export class CalculadorasPage implements OnInit {

  categorias:boolean = false;
  tipotercera:boolean = false;
  disabled:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  categoria_cambiada($event: { detail: { checked: boolean; }; }){
    this.categorias = $event.detail.checked;
  }

  tipo_tercera_cambiada($event: { detail: { checked: boolean; }; }){
    this.tipotercera = $event.detail.checked;
    this.disabled = this.tipotercera;
  }
}
