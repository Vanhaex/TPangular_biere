import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-adding-biere',
  templateUrl: './adding-biere.component.html',
  styleUrls: ['./adding-biere.component.scss']
})
export class AddingBiereComponent {

  biere_name = new FormControl('');
  updateName() {
    this.biere_name.setValue('heineken');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
