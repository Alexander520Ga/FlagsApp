import React from 'react';
import {StyleSheet} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
interface IIModalProps {
  defaultValue: string;
  renderButtonText: (value: string) => string;
  highBox: number;
  scroll?: boolean;
  options: string[];
}
const ModalDropdownMenu = ({
  defaultValue,
  highBox,
  renderButtonText,
  options,
  scroll = false,
}: IIModalProps) => {
  const styleDropDown = [
    {width: 220, height: highBox, backgroundColor: '#DEEFE7'},
  ];
  return (
    <ModalDropdown
      scrollEnabled={scroll}
      options={options}
      defaultValue={defaultValue}
      style={styles.styleButton}
      textStyle={styles.styleButtonText}
      dropdownStyle={styleDropDown}
      dropdownTextStyle={styles.StyleDropdownText}
      dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}
      showsVerticalScrollIndicator={true}
      animated={true}
      renderButtonText={renderButtonText}
    />
  );
};

export default ModalDropdownMenu;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  dropdownTextHighlightStyle: {
    backgroundColor: '#38DB85',
  },
  styleDropdown: {
    width: 220,
    height: 200,
    backgroundColor: '#DEEFE7',
  },
  styleButtonText: {
    color: 'white',
    fontSize: 23,
  },
  StyleDropdownText: {
    fontSize: 16,
    backgroundColor: '#159A9C',
    color: 'white',
  },
  styleButton: {
    width: 220,
    height: 40,
    backgroundColor: '#159A9C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
  },
});
