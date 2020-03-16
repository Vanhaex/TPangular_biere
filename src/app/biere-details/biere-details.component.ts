import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { bieres } from '../bieres';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-biere-details',
  templateUrl: './biere-details.component.html',
  styleUrls: ['./biere-details.component.scss']
})
export class BiereDetailsComponent implements OnInit {
  biere;
  addBieres(biere) {
    this.cartService.addBieres(biere);
    this._snackBar.open('Cette bière a été ajoutée à votre liste de souhaits !', 'OK', {duration: 3000});
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.biere = bieres[+params.get('biereID')];
    });
  }

}
