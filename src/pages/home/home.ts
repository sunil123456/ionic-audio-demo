import { Component, ChangeDetectorRef } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ListsPage} from '../lists/lists';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private _cdRef: ChangeDetectorRef) {
    // plugin won't preload data by default, unless preload property is defined within json object - defaults to 'none'
   
  }

  getItem(){
     this.navCtrl.push(ListsPage);
  }

}
