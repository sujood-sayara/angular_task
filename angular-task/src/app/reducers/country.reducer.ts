import { Action } from '@ngrx/store';
import * as PostActions from '../../actions/countries.action';
import { countryAction } from '../../actions/countries.action';
import { CountryActionTypes } from '../../actions/countries.action';
import { Country } from '../../models/country.model';
import { CountryService } from '../country.service';

export interface AppState {
  countries: Country[];
  loading: boolean;
}

const initialState: AppState = {
  countries: [],
  loading: false,
};

const loaded = false;

export function reducer(state: AppState = initialState, action: countryAction) {
  console.log(action);
  console.log(state);

  switch (action.type) {
    case CountryActionTypes.LOAD_countries:
      return {
        ...state,
      };
    case CountryActionTypes.LOAD_countries_SUCCESS:
      return {
        ...state,
        countries: action.payload,
      };

    case CountryActionTypes.LOAD_countries_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
