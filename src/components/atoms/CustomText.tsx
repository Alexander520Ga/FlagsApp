import React from 'react';
import {Text} from 'react-native';

interface IICustomText {
  text: string;
  textStyle: any;
}

const CustomText: React.FunctionComponent<IICustomText> = ({
  text,
  textStyle,
}) => {
  return <Text style={textStyle}>{text}</Text>;
};

export default CustomText;
