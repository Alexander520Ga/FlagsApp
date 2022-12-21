import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react';

import {Text, TextInput, View} from 'react-native';

import CustomButton from '../../atoms/Button';
import FlagImage from '../../atoms/FlagImage';
import {IICardCountryProps, IIcurrent} from './interfaces';
import {styles} from './styles';

const CardCountry = forwardRef<IIcurrent, IICardCountryProps>(
  ({country, isCorrect, getResult}, ref) => {
    const [value, setOnChangeText] = useState<string>('');

    useEffect(() => {
      setOnChangeText('');
    }, [country?.translations?.spa?.common]);

    const onChangeText = (text: string) => {
      setOnChangeText(text);
    };

    const onPressButton = () => {
      getResult(value);
    };

    const isDisabled = !value.length;

    useImperativeHandle(
      ref,
      () => ({
        setOnChangeText,
      }),
      [],
    );

    return (
      <View style={styles.card}>
        <FlagImage country={country} />
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
          placeholder="Escribe el nombre del pais"
        />

        {isCorrect === false && (
          <Text style={styles.nameCountry}>
            {country?.translations?.spa?.common}
          </Text>
        )}
        <View style={styles.containerButton}>
          <CustomButton
            isDisabled={isDisabled}
            textColor={'white'}
            color={'#159A9C'}
            title={'Calificar'}
            onPress={onPressButton}
          />
        </View>
      </View>
    );
  },
);

export default CardCountry;
