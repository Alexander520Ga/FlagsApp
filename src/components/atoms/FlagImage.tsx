import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IIData} from '../../interfaces/dataInterface';

interface IProps {
  country: IIData | undefined;
}

const FlagImage = ({country}: IProps) => {
  return (
    <View style={styles.containerflags}>
      {country ? (
        <Image style={styles.bandera} source={{uri: country?.flags?.png}} />
      ) : (
        <Text style={{color: '#002333', fontSize: 25, fontWeight: '900'}}>
          Loading...
        </Text>
      )}
    </View>
  );
};

export default FlagImage;

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
  containerflags: {
    width: 200,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bandera: {
    width: 200,
    height: 150,
  },
});
