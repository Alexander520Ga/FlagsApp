import React, {useState} from 'react';
import {IICountryContext, IIData} from '../../interfaces/dataInterface';
import {CountryContext} from './CountryContext';
interface IIProps {
  children: JSX.Element | JSX.Element[];
}
const CountryProvider: React.FC<IIProps> = ({children}) => {
  const [continent, setContinent] = React.useState<string>('Todos');
  const [country, setCountry] = useState<IIData | undefined>();
  const [numberFlags, setNumberFlags] = React.useState<number>(0);
  const [numberCountry, setNumberCountry] = React.useState<number>(1);

  const countryInfo: IICountryContext = {
    continent,
    setContinent,
    country,
    setCountry,
    numberCountry,
    setNumberFlags,
    numberFlags,
    setNumberCountry,
  };

  return (
    <CountryContext.Provider value={countryInfo}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
