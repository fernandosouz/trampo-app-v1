import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


  lat:any;
  lng:any;
  location:any = "";
  location2:any = "";

  constructor(public navCtrl: NavController,
              public geolocation: Geolocation,
              public alertCtrl: AlertController) {
    /*this.get();*/
    let x = "";
    this.location2 = "FERARERAR";
    let geocoder = new google.maps.Geocoder();


    console.log(x);
    this.location = x;

    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("Teste geolocation");
      console.log(resp);

      geocoder.geocode({'location':  {lat: resp.coords.latitude, lng: resp.coords.longitude}}, (results, status) => {
        console.log("oi");
        /*let alert = this.alertCtrl.create({
          title: 'Location!',
          subTitle: results[0].formatted_address,
          buttons: ['OK']
        });
        alert.present();*/
        console.log(results[0].formatted_address);
        x = results[0].formatted_address;
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  ngOnInit(){
  }

  get(){
    /*geocoder.geocode({'location':  {lat: -22.8999965, lng: -47.0320147}}, (results, status) => {
      console.log("oi");
      console.log(results);
      this.location = results[0].formatted_address;

    });*/
  }

}
