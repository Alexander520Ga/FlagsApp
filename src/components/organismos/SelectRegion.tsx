import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  ContinentsDataList,
  ContinentsPlaceholder,
} from '../../utils/continentsList';
import ModalDropdownMenu from '../atoms/ModalDropdown';

interface IISelectRegionData {
  setContinent: React.Dispatch<React.SetStateAction<string>>;
}
const SelectRegion = ({setContinent}: IISelectRegionData) => {
  const {American, Africa, Oceania, Europe, Asia} = ContinentsDataList;
  const {
    AmericaPlaceholder,
    AfricaPlaceholder,
    OceaniaPlaceholder,
    EuropaPlaceholder,
    AsiaPlaceholder,
    TodosPlaceholder,
    InitialPlaceholder,
  } = ContinentsPlaceholder;

  const selectData = (region: string) => {
    if (region === AmericaPlaceholder) {
      setContinent(American);
      return AmericaPlaceholder;
    } else if (region === AfricaPlaceholder) {
      setContinent(Africa);
      return AfricaPlaceholder;
    } else if (region === OceaniaPlaceholder) {
      setContinent(Oceania);
      return OceaniaPlaceholder;
    } else if (region === EuropaPlaceholder) {
      setContinent(Europe);
      return EuropaPlaceholder;
    } else if (region === AsiaPlaceholder) {
      setContinent(Asia);
      return AsiaPlaceholder;
    } else {
      setContinent(TodosPlaceholder);
      return InitialPlaceholder;
    }
  };

  const options = [
    AmericaPlaceholder,
    AfricaPlaceholder,
    OceaniaPlaceholder,
    EuropaPlaceholder,
    AsiaPlaceholder,
    TodosPlaceholder,
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Puedes elegir una región:</Text>
      <ModalDropdownMenu
        highBox={237}
        options={options}
        defaultValue={InitialPlaceholder}
        renderButtonText={selectData}
      />
    </View>
  );
};

export default SelectRegion;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontWeight: '500',
    fontSize: 20,
  },
});
