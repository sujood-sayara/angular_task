import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { MatSliderModule } from '@angular/material/slider'
import { CountryService } from './country.service';
import { JwPaginationModule } from 'jw-angular-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import {NgxPaginationModule} from 'ngx-pagination';
import { CountryFormComponent } from './country-form/country-form.component'; // <-- import the module
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryFormComponent,
  ],
  imports: [MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    MatSliderModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSliderModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule, // it's redundant here since MatInputModule already exports it

  ],
  providers: [CountryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
