import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';
import {Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators'
import {AfterViewInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit{
 
 
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  displayedColumns: string[] = ['name', 'alpha3Code', 'population', 'capital'];
  countries: Country[] =[];
 // dataSource = new MatTableDataSource<Country>(this.countries);
 dataSource = new MatTableDataSource<Country>([]);
  filterdCountries: Country[] =[];
  originalCountries: Country[] = [];
  totalRecords:number=0;
  maxDataPerPage=10;
  numberOfPAge=0;
  page:number =0
  paginationIndex=1;
  windowSize=5;
  updatedWindowSize=5;
  directionLinks= true;
  searchInput = new FormControl()
  myFilter = this.searchInput.valueChanges.pipe(
    distinctUntilChanged(),
    debounceTime(500)
    )
    
 
  constructor(private apiService: CountryService) { }
  
  ngOnInit(): void {
    if(this.apiService.countries.length ===0){
      this.getcountry()
    

    }else {
      this.countries=this.apiService.countries;
      this.originalCountries=this.countries;
      this.filterdCountries=this.countries;
      this.totalRecords = this.countries.length;
      this.numberOfPAge=Math.ceil(this.totalRecords/this.maxDataPerPage)
      this.update_paginationVlaue()
      this.pagination(1);
    }
    this.myFilter.subscribe(data =>{
      data=data.toLowerCase();
      this.countries=this.originalCountries.filter((c) => 
      c.name.toLowerCase().includes(data) ||
      c.alpha3Code.toLowerCase().includes(data) ||
      c.capital.toLowerCase().includes(data) ||
      c.population.toString().includes(data))
      this.filterdCountries=this.countries;
      this.update_paginationVlaue()
  
    })

  }
  update_paginationVlaue(){
  this.updatedWindowSize=5;
  this.paginationIndex=1;
    this.totalRecords = this.countries.length;
    this.numberOfPAge=Math.ceil(this.totalRecords/this.maxDataPerPage);
    if(this.numberOfPAge<=this. updatedWindowSize){
      this.updatedWindowSize=this.numberOfPAge;
    }
    else{
    this.updatedWindowSize=this.windowSize
    }
    this.pagination(1);
  }
  getcountry(){
    
    this.apiService.getCountries().subscribe( (data  ) =>{
      this.originalCountries=data;
      //this.originalCountries= data;
      this.countries = data;
      this.filterdCountries=this.countries;
      this.totalRecords = this.countries.length;
      this.numberOfPAge=this.totalRecords/this.maxDataPerPage
      this.apiService.countries=data;
      this.dataSource.data=data;
    //  console.log(this.dataSource.data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    //  this.pagination(1);
    })
  
  }

pagination(pageValue:number){
if(pageValue>=this.numberOfPAge)
pageValue=this.numberOfPAge
if(pageValue<=1)
pageValue=1
this.page=pageValue;
this.countries=this.filterdCountries.slice((pageValue-1)*this.maxDataPerPage,pageValue*this.maxDataPerPage);

}
nextPage(pageValue:number){
if(pageValue>this.numberOfPAge)
pageValue=this.numberOfPAge
  else if((pageValue-1)%this.windowSize==0){
     this.paginationIndex=this.paginationIndex+this.windowSize
    if(this.numberOfPAge-this.page<this.windowSize)
    this.updatedWindowSize=this.numberOfPAge-this.page;
  }   
}
prePage(pageValue:number){
  if(pageValue-1<=0)
  this.page=1
  else
  if((pageValue)%this.windowSize==0){
    this.paginationIndex=this.paginationIndex-5;
    this.updatedWindowSize=this.windowSize;
  }
}
addCountry(data:Country){
  this.originalCountries=[data,...this.originalCountries];

}

ngAfterViewInit() {
 // this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

}
const ELEMENT_DATA: Country[] = [
  {name:'s',alpha3Code:'Hydrogen',population: 1.0079,capital:''}]