import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['name', 'alpha3Code', 'population', 'capital'];
  countries: Country[] = [];
  dataSource = new MatTableDataSource<Country>([]);
  originalCountries: Country[] = [];
  totalRecords: number = 0;
  page: number = 0;
  searchInput = new FormControl();

  constructor(private apiService: CountryService) {}

  ngOnInit(): void {
    if (this.apiService.countries.length === 0) {
      this.getcountry();
    } else {
      this.countries = this.apiService.countries;
      this.dataSource.data = this.countries;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  getcountry() {
    this.apiService.getCountries().subscribe((data) => {
      this.originalCountries = data;
      this.countries = data;
      this.apiService.countries = data;
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
