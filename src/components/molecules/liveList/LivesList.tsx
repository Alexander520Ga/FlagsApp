import React from 'react';
import {View} from 'react-native';
import LivesImages from '../../organismos/LivesImages';
import {styles} from './styles';

export interface IILivesList {
  numLives: number[] | [];
}

const LivesList = ({numLives}: IILivesList) => {
  return (
    <View style={styles.container}>
      {numLives.map((item: number, index: number) => (
        <LivesImages key={index} />
      ))}
    </View>
  );
};

export default LivesList;
