import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const ResultIsIncorrect = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.IncorrectText}>Incorrecto</Text>
    </View>
  );
};

export default ResultIsIncorrect;
