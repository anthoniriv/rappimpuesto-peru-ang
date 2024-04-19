import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CronoService } from '../services/crono.service';
import { SavedataService } from '../services/savedata.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  cronograma: any;
  rucsSaved: any = [];
  listRucs: any = [];
  unicoRuc: any = [];

  constructor(
    private cronoService: CronoService,
    private saveDataService: SavedataService,
    private router: Router
  ) {
    this.loadData();
  }

  ngOnInit() {
    this.loadData();
    this.loadDataInterval();
  }

  getRucs() {
    this.rucsSaved = this.cronoService.getRUCS();
  }

  //Reload loadData function to get the new data
  ionViewDidEnter() {
    this.loadData();
  }

  //Function to use loadData function every 60 seconds
  loadDataInterval() {
    setInterval(() => {
      this.loadData();
    }, 20000);
  }

  async loadData() {
    this.listRucs = await this.saveDataService.getData();
    console.log('ESTOS SON TUS RUCS GUARDADOS', this.listRucs);
  }

  async removeItem(index: any) {
    this.saveDataService.removeItem(index);
    this.listRucs.splice(index, 1);
  }

  generaraCronograma(value: any) {
    console.log('ESTE ES EL VALOR QUE SE ENVIA', value);
    this.cronograma = '';
    this.router.navigate(['/cronograma', value]);
  }
}
