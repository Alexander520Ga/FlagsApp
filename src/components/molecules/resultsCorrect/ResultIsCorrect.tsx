import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from './styles';

interface IIResultPros {
  onPress(): void;
}

const ResultIsCorrect = ({onPress}: IIResultPros) => {
  return (
    <View style={styles.footer}>
      <View style={styles.correctBox}>
        <Text style={styles.textCorrect}>Correcto</Text>
        <View style={styles.button}>
          <Button color={'white'} title="Siguiente" onPress={onPress} />
        </View>
      </View>
    </View>
  );
};

export default ResultIsCorrect;
