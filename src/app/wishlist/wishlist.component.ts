import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})

export class WishlistComponent implements OnInit {
  whishlistBieres;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.whishlistBieres = this.cartService.getBieres();
  }

}
