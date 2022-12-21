import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ModalDropdownMenu from '../atoms/ModalDropdown';

interface IIProps {
  setNumberFlags: React.Dispatch<React.SetStateAction<number>>;
}
enum NumberFlagsPlaceholder {
  EasierLevel = '[Facil] 10 banderas',
  EasyLevel = '[Normal] 15 banderas',
  NormalLevel = '[Dificil] 20 banderas',
  HardLevel = '[Legendario] Todos',
  AllPlaceholder = 'Todas las banderas',
}

const SelectNumberFlags = ({setNumberFlags}: IIProps) => {
  const {EasierLevel, EasyLevel, NormalLevel, HardLevel, AllPlaceholder} =
    NumberFlagsPlaceholder;

  const selectNumberFlags = (numberFlags: string) => {
    if (numberFlags === EasierLevel) {
      setNumberFlags(10);
      return '10 banderas';
    } else if (numberFlags === EasyLevel) {
      setNumberFlags(15);
      return '15 banderas';
    } else if (numberFlags === NormalLevel) {
      setNumberFlags(20);
      return '20 banderas';
    } else {
      setNumberFlags(242);
      return 'Todas las banderas';
    }
  };
  const options = [EasierLevel, EasyLevel, NormalLevel, HardLevel];
  return (
    <View>
      <Text style={styles.text}>Dificultad:</Text>
      <ModalDropdownMenu
        highBox={155}
        options={options}
        defaultValue={AllPlaceholder}
        renderButtonText={selectNumberFlags}
      />
    </View>
  );
};

export default SelectNumberFlags;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontWeight: '500',
    fontSize: 20,
  },
});
