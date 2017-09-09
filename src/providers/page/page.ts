import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { ProfilePage } from "../../pages/profile/profile";
import { GalleryPage } from "../../pages/gallery/gallery";

/*
  Generated class for the PageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PageProvider {
  constructor() {}

  public pages = [
    { name: "Profile", component: ProfilePage },
    { name: "Gallery", component: GalleryPage }
  ];
}
