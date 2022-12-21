import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
import LivesList, {IILivesList} from '../../molecules/liveList/LivesList';
import {styles} from './styles';

export interface IHeader extends IILivesList {
  numberCountry: number;
}
const Header: FunctionComponent<IHeader> = ({numLives, numberCountry}) => {
  return (
    <View style={styles.head}>
      <Text style={styles.text}>¿Que país es?</Text>
      <View style={styles.imgLivesStyle}>
        <LivesList numLives={numLives} />
        <Text style={styles.numberLives}>#{numberCountry}</Text>
      </View>
    </View>
  );
};

export default Header;
