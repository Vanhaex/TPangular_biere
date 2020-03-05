import { Component, Inject } from '@angular/core';

import { bieres } from '../bieres';


@Component({
  selector: 'app-biere-listing',
  templateUrl: './biere-listing.component.html',
  styleUrls: ['./biere-listing.component.scss']
})
export class BiereListingComponent {
  bieres = bieres;

  like() {
    window.alert("Merci d'avoir aimé cette bière !");
  }

  onNotify() {
    window.alert('A consommer avec modération !');
  }
}