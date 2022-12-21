import useAllData from '../hooks/useAllData';
import {IIData} from '../interfaces/dataInterface';

import {
  countriesToChangeName,
  newNamesCountries,
} from '../utils/modifiedCountries';

const {America, Africa, Oceania, Europa, Asia} = countriesToChangeName;
const {
  grenada,
  sanVicenteYgranadinas,
  islasTurks,
  sintMaarten,
  caribeNeerlandes,
} = America;

const {
  granada,
  sanVicenteYLasGranadinas,
  islasTurcasYcaicos,
  sanMartin,
  bonaire,
} = newNamesCountries.America;

const {
  djibouti,
  congoRepDem,
  lesotho,
  congo,
  sierraLeone,
  guineaBisau,
  malawi,
  suazilandia,
  santaElenaAscension,
} = Africa;

const {
  yibuti,
  repDemCongo,
  lesoto,
  repCongo,
  sierraLeona,
  guineaBissau,
  malaui,
  esuatini,
  santaElena,
} = newNamesCountries.Africa;

const {islasCocosYkeeling, palau, islaDeNavidad, islasTokelau, islaDeNorfolk} =
  Oceania;

const {islasCocos, palaos, islaNavidad, tokelau, islaNorfolk} =
  newNamesCountries.Oceania;

const {repEslovaca, islasFaroe, ciudadVaticano, alandia} = Europa;

const {eslovaquia, islasFeroe, Vaticano, repAland} = newNamesCountries.Europa;

const {bahrein, Kirguizistan, arabiaSaudi} = Asia;

const {barein, kirgistan, arabiaSaudita} = newNamesCountries.Asia;

export const DataValidated = () => {
  const {data} = useAllData();
  const newData: IIData[] = data.map((country: IIData): IIData => {
    const {common} = country.translations.spa;
    switch (common) {
      case grenada:
        country.translations.spa.common = granada;
        return country;
      case sanVicenteYgranadinas:
        country.translations.spa.common = sanVicenteYLasGranadinas;
        return country;
      case islasTurks:
        country.translations.spa.common = islasTurcasYcaicos;
        return country;
      case sintMaarten:
        country.translations.spa.common = sanMartin;
        return country;
      case caribeNeerlandes:
        country.translations.spa.common = bonaire;
        return country;
      case djibouti:
        country.translations.spa.common = yibuti;
        return country;
      case congoRepDem:
        country.translations.spa.common = repDemCongo;
        return country;
      case lesotho:
        country.translations.spa.common = lesoto;
        return country;
      case congo:
        country.translations.spa.common = repCongo;
        return country;
      case sierraLeone:
        country.translations.spa.common = sierraLeona;
        return country;
      case guineaBisau:
        country.translations.spa.common = guineaBissau;
        return country;
      case malawi:
        country.translations.spa.common = malaui;
        return country;
      case suazilandia:
        country.translations.spa.common = esuatini;
        return country;
      case santaElenaAscension:
        country.translations.spa.common = santaElena;
        return country;
      case islasCocosYkeeling:
        country.translations.spa.common = islasCocos;
        return country;
      case palau:
        country.translations.spa.common = palaos;
        return country;
      case islaDeNavidad:
        country.translations.spa.common = islaNavidad;
        return country;
      case islasTokelau:
        country.translations.spa.common = tokelau;
        return country;
      case islaDeNorfolk:
        country.translations.spa.common = islaNorfolk;
        return country;
      case repEslovaca:
        country.translations.spa.common = eslovaquia;
        return country;
      case islasFaroe:
        country.translations.spa.common = islasFeroe;
        return country;
      case ciudadVaticano:
        country.translations.spa.common = Vaticano;
        return country;
      case alandia:
        country.translations.spa.common = repAland;
        return country;
      case bahrein:
        country.translations.spa.common = barein;
        return country;
      case Kirguizistan:
        country.translations.spa.common = kirgistan;
        return country;
      case arabiaSaudi:
        country.translations.spa.common = arabiaSaudita;
        return country;
      default:
        return country;
    }
  });
  return {newData};
};
