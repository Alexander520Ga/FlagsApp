import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface IIProps {
  numberFlags: number;
  lives: number[];
}

const RenderBodyText = ({numberFlags, lives}: IIProps) => {
  return (
    <View style={styles.containerText}>
      {numberFlags === 10 || numberFlags === 11 ? (
        <Text style={styles.lvlStyle}>Nivel: Facil</Text>
      ) : numberFlags === 15 || numberFlags === 16 ? (
        <Text style={styles.lvlStyle}>Nivel: Medio</Text>
      ) : numberFlags === 20 || numberFlags === 21 ? (
        <Text style={styles.lvlStyle}>Nivel: Dificil</Text>
      ) : (
        <Text style={styles.lvlStyle}>Nivel: Legendario</Text>
      )}
      {lives.length <= 2 ? (
        <Text style={styles.textoWaring}>Sigue practicando</Text>
      ) : (
        <View style={styles.subcontainerText}>
          <View style={styles.textEmoji}>
            <Text style={styles.textGood}>Lo hiciste PERFECTO!!</Text>
            <Text style={styles.textCongratulations}>Congratulations 🥳🥳</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default RenderBodyText;
