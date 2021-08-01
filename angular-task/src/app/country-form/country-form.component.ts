import { Component, OnInit } from '@angular/core';
import { CountryComponent } from '../country/country.component';

import { Country } from '../country';
import { AppModule } from '../app.module';
import { Router } from '@angular/router';
import { CountryService } from '../country.service';
@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {

  country={name:'',alpha3Code:'',capital:'',population:0};
  constructor(private countriesSerivce:CountryService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.countriesSerivce.countries.unshift(this.country)
    
    this.router.navigate(['home'])
   
}


}
