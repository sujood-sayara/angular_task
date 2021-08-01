import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  path= 'https://restcountries.eu/rest/v2/all'
countries:Country[]=[];


  constructor(private httpClient: HttpClient) { }


  getCountries() {
   return this.httpClient.get<Country[]>(this.path);
  }
  
 
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any)=> {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
    };
  }
}
