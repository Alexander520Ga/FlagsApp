import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
import ShowResult from '../../organismos/ShowResult';

export interface IFooter {
  isResultActived: boolean;
  isCorrect: boolean | null;
  onPressButton: () => void;
}

const Footer: FunctionComponent<IFooter> = ({
  isResultActived,
  isCorrect,
  onPressButton,
}) => {
  return (
    <View>
      {isResultActived === true ? (
        <ShowResult isCorrect={isCorrect} onPress={onPressButton} />
      ) : (
        <View>
          <Text> </Text>
        </View>
      )}
    </View>
  );
};
export default Footer;
