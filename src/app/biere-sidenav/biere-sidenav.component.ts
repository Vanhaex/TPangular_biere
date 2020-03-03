import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-biere-sidenav',
  templateUrl: './biere-sidenav.component.html',
  styleUrls: ['./biere-sidenav.component.scss']
})
export class BiereSidenavComponent {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(Popup1Component, {
      width: '43.75rem',
      data: {name: this.name, animal: this.animal}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
}
  
}

@Component({
  selector: 'app-popup1',
  templateUrl: './popup1.component.html',
  styleUrls: ['./biere-sidenav.component.scss']
})


export class Popup1Component {

  constructor(
    public dialogRef: MatDialogRef<Popup1Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}