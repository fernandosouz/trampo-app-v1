import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  user:any = {
    name: "Fernando",
    email: "fernandosouza@gmail.com",
    phone: "(19) 99615-8848",
    companies: [  {id: 1, name:"Broto Legal"},
                  {id: 1, name:"Ampliato"},
                  {id: 1, name:"CI&T"},
                  {id: 1, name:"InFive"}]
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
