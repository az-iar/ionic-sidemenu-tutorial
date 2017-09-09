import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { PageProvider } from "../../providers/page/page";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public pageProvider: PageProvider
  ) {}

  goToPage(component) {
    let data = { name: "Azri", email: "mazri.iar@gmail.com" };

    this.navCtrl.push(component, data);
  }
}
