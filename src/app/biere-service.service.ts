import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Biere } from './biere';

@Injectable({
  providedIn: 'root'
})
export class BiereServiceService implements InMemoryDbService {
  createDb() {
    const bieres: Biere[]=[
      { id: 1, biere_name: 'Tripel Karmeliet', biere_desc: 'Bière à fermentation forte', biere_percent: '8.4%'},
      { id: 2, biere_name: 'Petrus', biere_desc: 'Bière à fermentation forte', biere_percent: '6.6%' }

    ];
    return {bieres};
  }

  constructor() { }
}
