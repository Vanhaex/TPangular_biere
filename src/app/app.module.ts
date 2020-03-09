import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiereToolbarComponent } from './biere-toolbar/biere-toolbar.component';
import { BiereSidenavComponent } from './biere-sidenav/biere-sidenav.component';
import { BiereListingComponent } from './biere-listing/biere-listing.component';
import { BiereAlertsComponent } from './biere-alerts/biere-alerts.component';
import { BiereDetailsComponent } from './biere-details/biere-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ShippingComponent } from './shipping/shipping.component';
import { AddingBiereComponent } from './adding-biere/adding-biere.component';

@NgModule({
  declarations: [
    AppComponent,
    BiereToolbarComponent,
    BiereSidenavComponent,
    BiereListingComponent,
    BiereAlertsComponent,
    BiereDetailsComponent,
    WishlistComponent,
    ShippingComponent,
    AddingBiereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTableModule,
    RouterModule.forRoot([
      { path: '', component: BiereListingComponent },
      { path: 'bieres/:biereID', component: BiereDetailsComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'shipping', component: ShippingComponent },
    ]),
    MatTooltipModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
