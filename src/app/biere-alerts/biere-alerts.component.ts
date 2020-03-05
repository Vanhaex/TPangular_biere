import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-biere-alerts',
  templateUrl: './biere-alerts.component.html',
  styleUrls: ['./biere-alerts.component.scss']
})
export class BiereAlertsComponent implements OnInit {

  @Input() biere;
  @Output() notify = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
