import { Component } from '@angular/core';
import { ViewController} from 'ionic-angular';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})


export class Register {
  constructor(public viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss()

  }

}
