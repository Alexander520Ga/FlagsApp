import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {DEFAULT_LIVES} from '../../../constants';
interface IIProps {
  returnHomeOnPress: () => void;
  tryAgainOnPress: () => void;
  correctsFlags: number;
}

const LoserTemplate = ({
  returnHomeOnPress,
  tryAgainOnPress,
  correctsFlags,
}: IIProps) => {
  return (
    <View style={styles.containerScreen}>
      <View style={styles.content}>
        <Text style={styles.text}>YOU LOST</Text>
        <View style={styles.containerImg}>
          {DEFAULT_LIVES.map((live, index) => (
            <FontAwesome5
              key={index}
              name="heart-broken"
              style={styles.hearthBroken}
            />
          ))}
        </View>
        <View style={styles.containerText}>
          <Text style={styles.banderasTitle}>Banderas</Text>
          <Text style={styles.banderasResult}>
            {correctsFlags === 1
              ? `${correctsFlags} Bandera`
              : `${correctsFlags} Banderas`}
          </Text>
        </View>
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.homeButton} onPress={returnHomeOnPress}>
          <AntDesign name="home" style={styles.HomeIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tryAgainButton}
          onPress={tryAgainOnPress}>
          <FontAwesome name="undo" style={styles.tryAgain} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoserTemplate;
