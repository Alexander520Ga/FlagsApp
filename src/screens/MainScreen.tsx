import React, {
  useEffect,
  useState,
  useRef,
  useReducer,
  useContext,
} from 'react';

import {Props} from '../../App';
import {IIcurrent} from '../components/molecules/cardCountry/interfaces';
import MainTemplete from '../components/templates/Main/MainTemplete';
import {ActionsTypes, dataReducer} from '../reducer/dataReducer/dataReducer';
import {deleteTildes} from '../utils/deleteTildes';
import useCountries from '../hooks/useCountries';
import {CountryContext} from '../context/CountryContext/CountryContext';
import {LivesContext} from '../context/LivesContext/LivesContext';

interface IIMainProps {
  navigation: Props;
  isResultActived: boolean;
  setIsResultActived: React.Dispatch<React.SetStateAction<boolean>>;
  reloadData: boolean;
  isCorrect: boolean | null;
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const MainScreen = ({
  navigation,
  isResultActived,
  setIsResultActived,
  reloadData,
  isCorrect,
  setIsCorrect,
}: Props & IIMainProps) => {
  const {navigate} = navigation;

  const {countries} = useCountries();
  const cardCountryRef = useRef<IIcurrent | null>(null);
  const [switchChangeFlag, setSwitchChangeFlag] = useState<boolean>(false);

  const [state, dispatchData] = useReducer(dataReducer, []);

  const countryInfo = useContext(CountryContext);

  const {lives, brokenLives, setLives, setBrokenLives} =
    useContext(LivesContext);

  const {
    country,
    setCountry,
    continent,
    numberFlags,
    numberCountry,
    setNumberCountry,
  } = countryInfo;

  useEffect(() => {
    dispatchData({type: ActionsTypes.resetData, payload: countries});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries.length, reloadData]);

  useEffect(() => {
    if (continent !== 'Todos') {
      return dispatchData({type: ActionsTypes.ByRegion, payload: continent});
    }
    return;
  }, [continent, state.length, reloadData]);

  useEffect(() => {
    if (lives.length === 0) {
      return navigate('LoserScreen');
    }
    return;
  }, [lives.length, navigate, setBrokenLives, brokenLives]);

  useEffect(() => {
    const randomNumber: number = Math.round(Math.random() * state.length);
    const indexCountry: number =
      randomNumber !== 0 ? randomNumber - 1 : randomNumber;

    const findCountryForIndex = state.find(
      (ctry, index) => index === indexCountry,
    );
    setCountry(findCountryForIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [switchChangeFlag, state.length]);

  const deleteLive = () => {
    setBrokenLives([]);
    const newLives = [...lives];
    newLives.pop();
    setLives(newLives);

    const newBrokenLives = [...brokenLives];
    newBrokenLives.push(1);
    setBrokenLives(newBrokenLives);
  };

  const getResult = (countryText: string) => {
    countryText = countryText.trim();
    setIsResultActived(true);
    const nameCountry = deleteTildes(
      country?.translations.spa.common.toLowerCase(),
    );
    const nameCountryJoined = deleteTildes(countryText?.toLowerCase());
    if (nameCountryJoined === nameCountry) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
      deleteLive();
    }
  };

  const numberOfCountry = () => {
    if (numberCountry === numberFlags) {
      return navigate('WinnerScreen');
    } else {
      setNumberCountry(num => num + 1);
    }
  };

  const nextAction = () => {
    dispatchData({
      type: ActionsTypes.delete,
      payload: country?.translations.spa.common,
    });
    setSwitchChangeFlag(!switchChangeFlag);
    setIsCorrect(null);
    setIsResultActived(false);
    numberOfCountry();
  };

  const onPressButton = () => {
    nextAction();
    cardCountryRef.current?.setOnChangeText('');
  };

  const bodyProps = {
    cardCountryRef,
    country,
    isCorrect,
    getResult,
  };
  const footerProps = {
    onPressButton,
    isCorrect,
    isResultActived,
  };
  return (
    <MainTemplete>
      <MainTemplete.Header numLives={lives} numberCountry={numberCountry} />
      <MainTemplete.Body {...bodyProps} />
      <MainTemplete.Footer {...footerProps} />
    </MainTemplete>
  );
};
export default MainScreen;
