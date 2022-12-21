import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

interface IIPropsButton {
  title: string;
  color?: string;
  textColor?: string;
  onPress: () => void;
  isDisabled: boolean;
}

const CustomButton = ({
  title,
  onPress,
  color = '#484FE5',
  textColor = 'white',
  isDisabled,
}: IIPropsButton) => {
  const styles = [{...style.button, backgroundColor: color}];
  return (
    <View style={styles}>
      <Button
        title={title}
        onPress={onPress}
        color={textColor}
        disabled={isDisabled}
      />
    </View>
  );
};

const style = StyleSheet.create({
  button: {borderRadius: 20, width: 150, height: 45},
});

export default CustomButton;
