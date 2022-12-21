import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const LivesImages = () => {
  return (
    <View style={styles.containerLivesImage}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/1125px-Love_Heart_symbol.svg.png',
        }}
      />
    </View>
  );
};

export default LivesImages;

const styles = StyleSheet.create({
  containerLivesImage: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: 40,
    height: 40,
  },
});
