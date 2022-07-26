import React from 'react';
import { Button } from 'react-native';
import { CustomButtonProps } from './CustomButton.types';

export const CustomButton: React.FC<CustomButtonProps> = props => {
  return <Button title={props.title} onPress={props.onPress} />;
};
