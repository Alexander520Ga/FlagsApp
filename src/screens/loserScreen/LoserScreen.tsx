import React, {useContext} from 'react';
import {Props} from '../../../App';
import LoserTemplate from '../../components/templates/loser/LoserTemplate';
import {DEFAULT_LIVES} from '../../constants';
import {CountryContext} from '../../context/CountryContext/CountryContext';
import {LivesContext} from '../../context/LivesContext/LivesContext';

interface IIProps {
  navigation: Props;
  setIsResultActived: React.Dispatch<React.SetStateAction<boolean>>;
  reloadData: boolean;
  setReloadData: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean | null>>;
}
const LoserScreen = ({
  navigation,
  setIsResultActived,
  reloadData,
  setReloadData,
  setIsCorrect,
}: Props & IIProps) => {
  const {navigate} = navigation;
  const {numberCountry, setNumberCountry} = useContext(CountryContext);
  const {setLives, setBrokenLives} = useContext(LivesContext);
  const returnHome = () => {
    setNumberCountry(1);
    navigate('StartingScreen');
  };

  const tryAgain = () => {
    setBrokenLives([]);
    setIsCorrect(null);
    setReloadData(!reloadData);
    setIsResultActived(false);
    setNumberCountry(1);
    setLives([...DEFAULT_LIVES]);
    navigate('MainScreen');
  };

  const correctsFlags = numberCountry - 1;
  return (
    <LoserTemplate
      correctsFlags={correctsFlags}
      returnHomeOnPress={returnHome}
      tryAgainOnPress={tryAgain}
    />
  );
};

export default LoserScreen;
