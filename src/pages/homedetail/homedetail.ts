import { Component } from '@angular/core';

import {NavParams} from 'ionic-angular';

@Component({
  selector: 'page-homedetail',
  templateUrl: 'homedetail.html'
})
export class HomeDetail {
   item : any;
   constructor(public params: NavParams){
   this.item = this.params.get('item');
   }

}
