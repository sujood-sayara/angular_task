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
@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryFormComponent,
  ],
  imports: [MatPaginatorModule,
    MatTableModule,
    MatSliderModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  

    MatPaginatorModule,

    MatSliderModule,
  
    MatSortModule,
    MatTableModule,
  ],
  providers: [CountryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
