import React, {useContext} from 'react';
import {Props} from '../../App';
import StartingTemplete from '../components/templates/starting/StartingTemplete';
import {DEFAULT_LIVES} from '../constants';
import {CountryContext} from '../context/CountryContext/CountryContext';
import {LivesContext} from '../context/LivesContext/LivesContext';

interface IStartingScreenProps {
  navigation: Props;
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const StartingScreen = ({
  navigation,
  setIsCorrect,
}: Props & IStartingScreenProps) => {
  const {navigate} = navigation;
  const countryInfo = useContext(CountryContext);
  const {setBrokenLives, setLives} = useContext(LivesContext);

  const {setContinent, setNumberFlags, setNumberCountry} = countryInfo;
  const navigateToNextScreen = () => {
    setBrokenLives([]);
    setIsCorrect(null);
    setLives([...DEFAULT_LIVES]);
    setNumberCountry(1);
    return navigate('MainScreen');
  };
  return (
    <StartingTemplete
      setContinent={setContinent}
      setNumberFlags={setNumberFlags}
      navigateToNextScreen={navigateToNextScreen}
    />
  );
};

export default StartingScreen;
