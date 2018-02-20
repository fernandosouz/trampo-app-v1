import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ReportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html',
})
export class ReportsPage {
  today:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

    this.today = new Date().toISOString();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportsPage');
  }

}
