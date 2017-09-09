import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the GalleryDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-gallery-details",
  templateUrl: "gallery-details.html"
})
export class GalleryDetailsPage {
  gallery: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gallery = navParams.get("gallery");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad GalleryDetailsPage");
  }
}
