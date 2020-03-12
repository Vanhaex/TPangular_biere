import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { bieres } from '../bieres';


@Component({
  selector: 'app-biere-listing',
  templateUrl: './biere-listing.component.html',
  styleUrls: ['./biere-listing.component.scss']
})
export class BiereListingComponent {
  bieres = bieres;

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  like() {
    this._snackBar.open("Merci d'avoir aimé cette bière !", 'OK', {duration: 3000});
  }

  onNotify() {
    window.alert('A consommer avec modération !');
  }
}

