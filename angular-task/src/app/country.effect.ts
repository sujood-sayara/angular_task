import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { LoadCountryAction,CountryActionTypes, LoadCountrySuccessAction, LoadCountryFailureAction} from '../actions/countries.action'
import { of } from 'rxjs';
import {CountryService} from './country.service'
 
@Injectable()
export class CountryEffects {
    @Effect() loadShopping$ = this.actions$
    .pipe(
      ofType<LoadCountryAction>(CountryActionTypes.LOAD_countries),
      mergeMap(
        () => this.appservice.getCountries()
          .pipe(
            map(data => {
              return new LoadCountrySuccessAction(data)
            }),
            catchError(error => of(new LoadCountryFailureAction(error)))
          )
      ),
  )
 
  constructor(
    private actions$: Actions,
    private appservice:CountryService,
  ) {}
}