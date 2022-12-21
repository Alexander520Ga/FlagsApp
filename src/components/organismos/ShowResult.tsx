import React from 'react';
import {View} from 'react-native';
import ResultIsIncorrect from '../molecules/resultIncorrect/ResultIsIncorrect';
import ResultIsCorrect from '../molecules/resultsCorrect/ResultIsCorrect';
interface IIShowResult {
  isCorrect: boolean | null;
  onPress(): void;
}
const ShowResult = ({isCorrect, onPress}: IIShowResult) => {
  const Result = () => {
    if (isCorrect === true) {
      return <ResultIsCorrect onPress={onPress} />;
    } else if (isCorrect === false) {
      return <ResultIsIncorrect />;
    }
    return;
  };

  return <View>{Result()}</View>;
};

export default ShowResult;
