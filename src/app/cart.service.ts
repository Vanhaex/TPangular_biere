import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemBieres = [];
  constructor(
    private http: HttpClient
  ) { }

  addBieres(biere) {
    this.itemBieres.push(biere);
  }

  getBieres() {
    return this.itemBieres;
  }

  clearBieres() {
    this.itemBieres = [];
    return this.itemBieres;
  }

  getShippingInfos() {
    return this.http.get('/assets/shipping.json');
  }
}