import { Pipe, PipeTransform } from '@angular/core';
import { Country } from './country';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(countries: Country[], searchText: string): Country[] {
    if (!countries) {
      return [];
    }
    if (!searchText) {
      return countries;
    }
    searchText = searchText.toLocaleLowerCase();

    return countries.filter((country) => {
      return (
        country.name.toLowerCase().includes(searchText) ||
        country.alpha3Code.toLowerCase().includes(searchText) ||
        country.capital.toLowerCase().includes(searchText) ||
        country.population.toString().includes(searchText)
      );
    });
   
  }

}
