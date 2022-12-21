import {IIData} from '../../../interfaces/dataInterface';

export interface IICardCountryProps {
  country: IIData | undefined; //warning
  isCorrect: boolean | null;
  getResult(countryText: string): void;
}
export interface IIcurrent {
  setOnChangeText: (text: string) => void;
}
