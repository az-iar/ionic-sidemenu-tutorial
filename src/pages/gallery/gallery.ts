import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GalleryDetailsPage } from "../gallery-details/gallery-details";

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-gallery",
  templateUrl: "gallery.html"
})
export class GalleryPage {
  galleries = [
    { title: "First Gallery", thumbnail: "http://via.placeholder.com/350x150" },
    { title: "Second Gallery", thumbnail: "http://via.placeholder.com/350x350" }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {}

  showGalleryDetails(gallery) {
    this.navCtrl.setRoot(GalleryDetailsPage, { gallery });
  }
}
