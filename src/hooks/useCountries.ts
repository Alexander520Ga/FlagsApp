import {IIData} from '../interfaces/dataInterface';
import {countriesToDelete} from '../utils/modifiedCountries';
import {DataValidated} from '../utils/countriesValidated';

const {
  islasUltraMaritimas,
  saintMartin,
  wallisYfutuna,
  islaSvalbard,
  islasHeard,
  islasGeorgias,
  tierrasAustrales,
  islasBouvet,
} = countriesToDelete;

const useCountries = () => {
  const {newData} = DataValidated();
  const countries = newData.filter((country: IIData) => {
    const {common} = country.translations.spa;
    return (
      common !== islasUltraMaritimas &&
      common !== saintMartin &&
      common !== wallisYfutuna &&
      common !== islaSvalbard &&
      common !== islasHeard &&
      common !== islasGeorgias &&
      common !== tierrasAustrales &&
      common !== islasBouvet
    );
  });
  return {countries};
};

export default useCountries;
