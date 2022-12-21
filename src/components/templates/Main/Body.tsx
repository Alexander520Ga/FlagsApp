import React from 'react';
import {IIData} from '../../../interfaces/dataInterface';
import CardCountry from '../../molecules/cardCountry/CardCountry';

export interface IBody {
  cardCountryRef: any;
  country: IIData | undefined;
  isCorrect: boolean | null;
  getResult: (countryText: string) => void;
}

const Body: React.FunctionComponent<IBody> = ({
  cardCountryRef,
  country,
  isCorrect,
  getResult,
}) => {
  return (
    <CardCountry
      ref={cardCountryRef}
      country={country}
      isCorrect={isCorrect}
      getResult={getResult}
    />
  );
};

export default Body;
