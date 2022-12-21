import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IIStartingProps} from '../../../interfaces/startingInterfaces';
import CustomButton from '../../atoms/Button';
import SelectNumberFlags from '../../organismos/SelectNumberFlags';
import SelectRegion from '../../organismos/SelectRegion';
import {styles} from './styles';

const StartingTemplete = ({
  setContinent,
  setNumberFlags,
  navigateToNextScreen,
}: IIStartingProps) => {
  return (
    <SafeAreaView style={styles.generalStyles}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Test de Banderas</Text>
      </View>
      <View style={styles.inputsContainer}>
        <View>
          <SelectRegion setContinent={setContinent} />
        </View>
        <View style={styles.selectDifficulty}>
          <SelectNumberFlags setNumberFlags={setNumberFlags} />
        </View>
        <View style={styles.containerButton}>
          <CustomButton
            isDisabled={false}
            textColor={'#ffffff'}
            color={'#159A9C'}
            title={'Comenzar'}
            onPress={navigateToNextScreen}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StartingTemplete;
