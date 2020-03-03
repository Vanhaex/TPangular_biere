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
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { InMemoryDbService } from 'angular-in-memory-web-api';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiereToolbarComponent } from './biere-toolbar/biere-toolbar.component';
import { BiereSidenavComponent } from './biere-sidenav/biere-sidenav.component';
import { BiereListingComponent } from './biere-listing/biere-listing.component';
import { Biere } from './biere';

const appRoutes: Routes = [
  {
    path: 'liste',
    component: BiereListingComponent,
    data: { title: 'Liste des bières' }
  },
  { path: '',
    redirectTo: '/liste',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BiereToolbarComponent,
    BiereSidenavComponent,
    BiereListingComponent
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
    InMemoryDbService.forRoot(Biere),
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTableModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
