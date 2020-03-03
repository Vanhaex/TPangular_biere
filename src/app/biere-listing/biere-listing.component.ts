import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-biere-listing',
  templateUrl: './biere-listing.component.html',
  styleUrls: ['./biere-listing.component.scss']
})
export class BiereListingComponent {

  constructor(public dialog: MatDialog) { }
}