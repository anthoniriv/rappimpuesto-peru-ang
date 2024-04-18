import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  //go to google website
  contact(){
    window.open('https://linktr.ee/welquerguzman', '_system', 'location=yes'); return false;
  }
  goToTiktok(){
    window.open('https://www.tiktok.com/@welguzcri6?_t=8W4rlMeXmYH&_r=1', '_system', 'location=yes'); return false;
  }
}
