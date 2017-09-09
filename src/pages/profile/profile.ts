import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  email: any;
  name: any;
  formData = {
    name: "",
    email: "",
    password: "",
    phone_no: "",
    address: "",
    gender: "",
    is_online: true
  };

  genders = ["Male", "Female"];

  states = [{ id: 1, name: "Selangor" }, { id: 2, name: "Terengganu" }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get("name");
    this.email = navParams.get("email");
  }

  ionViewWillEnter() {
    if (localStorage.getItem("profile")) {
      this.formData = JSON.parse(localStorage.getItem("profile"));
    }
  }

  saveProfile() {
    localStorage.setItem("profile", JSON.stringify(this.formData));
  }
}
