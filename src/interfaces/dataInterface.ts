interface IIName {
  common: string;
}
interface IITranslations {
  spa: IIName;
}
interface IFlags {
  png: string;
}

export interface IIData {
  translations: IITranslations;
  flags: IFlags;
  region: string;
}
export interface IICountryContext {
  continent: string;
  setContinent: React.Dispatch<React.SetStateAction<string>>;
  country: IIData | undefined;
  setCountry: React.Dispatch<React.SetStateAction<IIData | undefined>>;
  numberCountry: number;
  setNumberFlags: React.Dispatch<React.SetStateAction<number>>;
  numberFlags: number;
  setNumberCountry: React.Dispatch<React.SetStateAction<number>>;
}
