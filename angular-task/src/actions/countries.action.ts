import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Country } from './../models/country.model';

export const ADD_Country = '[country] Add';
export const REMOVE_Country = '[country] Remove';
export enum CountryActionTypes {
  LOAD_countries = '[countries Page] Load countries',
  LOAD_countries_SUCCESS = '[countries Page] Load Shopping Success',
  LOAD_countries_FAILURE = '[countries Page] Load Shopping Failure',
}
export class LoadCountryAction implements Action {
  readonly type = CountryActionTypes.LOAD_countries;
}
export class LoadCountrySuccessAction implements Action {
  readonly type = CountryActionTypes.LOAD_countries_SUCCESS;

  constructor(public payload: Array<Country>) {}
}
export class LoadCountryFailureAction implements Action {
  readonly type = CountryActionTypes.LOAD_countries_FAILURE;

  constructor(public payload: Error) {}
}

export type countryAction =
  | LoadCountryAction
  | LoadCountryFailureAction
  | LoadCountrySuccessAction;
