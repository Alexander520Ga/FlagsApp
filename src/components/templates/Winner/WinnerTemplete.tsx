import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text, View, TouchableOpacity} from 'react-native';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import {styles} from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RenderBodyText from './RenderBodyText';

interface IIProps {
  onPress: () => void;
  lives: number[];
  brokenLives: number[];
  numberFlags: number;
}

const WinnerTemplete = ({
  onPress,
  lives,
  brokenLives,
  numberFlags,
}: IIProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>YOU WON</Text>
      <View style={styles.containerIcons}>
        {brokenLives.map((x, index) => (
          <FontAwesome5
            key={index}
            name="heart-broken"
            style={styles.hearthBroken}
          />
        ))}
        {lives.map((x, index) => (
          <AntDesign key={index} name="heart" style={styles.hearth} />
        ))}
      </View>
      <RenderBodyText lives={lives} numberFlags={numberFlags} />
      <View style={styles.containerButtons}>
        <FontAwesome5Pro name="fort-awesome-alt" style={styles.logo} />
        <TouchableOpacity style={styles.homeButton} onPress={onPress}>
          <AntDesign name="home" style={styles.HomeIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WinnerTemplete;
