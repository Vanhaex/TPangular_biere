import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { bieres } from '../bieres';

@Component({
  selector: 'app-biere-details',
  templateUrl: './biere-details.component.html',
  styleUrls: ['./biere-details.component.scss']
})
export class BiereDetailsComponent implements OnInit {
  biere;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.biere = bieres[+params.get('biereID')];
    });
  }

}
