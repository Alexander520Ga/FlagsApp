import {createContext} from 'react';
import {IICountryContext} from '../../interfaces/dataInterface';

const initialState: IICountryContext = {
  continent: '',
  setContinent: () => {},
  country: undefined,
  setCountry: () => {},
  numberCountry: 0,
  setNumberFlags: () => {},
  numberFlags: 0,
  setNumberCountry: () => {},
};

export const CountryContext = createContext<IICountryContext>(initialState);
