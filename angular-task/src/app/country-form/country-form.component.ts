import { Component, OnInit } from '@angular/core';
import { CountryComponent } from '../country/country.component';
import { AppModule } from '../app.module';
import { Router } from '@angular/router';
import { CountryService } from '../country.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as CountryActions from '../../actions/countries.action';
import { reducer } from '../reducers/country.reducer';
import { Country } from 'src/models/country.model';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css'],
})
export class CountryFormComponent implements OnInit {
  country = { name: '', alpha3Code: '', capital: '', population: 0 };
  allcountry: Observable<Country[]>;
  constructor(
    private countriesSerivce: CountryService,
    private router: Router,
    private store: Store<{'country' : Country[]}>
  ) {
    this.allcountry = store.select('country');
  }
  ngOnInit(): void {}

  onSubmit() {
    this.countriesSerivce.countries.unshift(this.country);
    //this.store.dispatch(new CountryActions.ADDCountry(this.country));
    this.country = { name: '', alpha3Code: '', capital: '', population: 0 };

    //this.router.navigate(['home']);
  }
}
