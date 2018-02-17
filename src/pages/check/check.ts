import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the CheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check',
  templateUrl: 'check.html',
})
export class CheckPage {

  company:any = "Broto Legal";
  companyOptions:any = ["InFive", "Broto Legal", "Ampliato", "CI&T"];
  location:string = "";
  Hour:any;
  Minute:any;
  Seconds:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public geolocation: Geolocation) {

  }
  ionViewDidLoad() {

  }

  checkNow(){
    let d = new Date();
    console.log(d.getHours());
    console.log(d.getMinutes());
  }

  ngOnInit(){
    this.utcTime();
    this.getLocaltion();
  }

  utcTime(): void {
    setInterval(() => {
      this.Hour = new Date().getHours();
      this.Minute = new Date().getMinutes();
      this.Seconds = new Date().getSeconds();
    }, 1000);
  }

  getLocaltion(){
    setTimeout(() => {
      this.geolocation.getCurrentPosition().then((resp) => {
        let geocoder = new google.maps.Geocoder();
        geocoder.geocode({'location':  {lat: resp.coords.latitude, lng: resp.coords.longitude}}, (results, status) => {
          this.location = results[0].formatted_address;
          console.log(results[0].formatted_address);
        });
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    }, 1000);

    setInterval(() => {
      this.geolocation.getCurrentPosition().then((resp) => {
        let geocoder = new google.maps.Geocoder();
        geocoder.geocode({'location':  {lat: resp.coords.latitude, lng: resp.coords.longitude}}, (results, status) => {
          this.location = results[0].formatted_address;
          console.log(results[0].formatted_address);
        });
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    }, 60000);
  }

}
