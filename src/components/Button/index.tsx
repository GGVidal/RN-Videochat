import React from 'react';
import {ButtonStyled} from './styles';
import {ButtonProps} from './types';

export const Button = ({onPress, Icon}: ButtonProps) => {
  return <ButtonStyled onPress={onPress}>{Icon}</ButtonStyled>;
};
