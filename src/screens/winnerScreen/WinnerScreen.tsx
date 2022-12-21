import React, {useContext} from 'react';
import {Props} from '../../../App';
import WinnerTemplete from '../../components/templates/Winner/WinnerTemplete';
import {CountryContext} from '../../context/CountryContext/CountryContext';
import {LivesContext} from '../../context/LivesContext/LivesContext';

interface IIProps {
  navigation: Props;
}

const WinnerScreen = ({navigation}: Props & IIProps) => {
  const {navigate} = navigation;
  const {setNumberCountry, numberFlags} = useContext(CountryContext);
  const {lives, brokenLives} = useContext(LivesContext);

  const navigateToStartingScreen = () => {
    setNumberCountry(1);
    return navigate('StartingScreen');
  };
  return (
    <WinnerTemplete
      numberFlags={numberFlags}
      onPress={navigateToStartingScreen}
      lives={lives}
      brokenLives={brokenLives}
    />
  );
};

export default WinnerScreen;
