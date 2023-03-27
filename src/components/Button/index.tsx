import React from 'react';
import {ButtonStyled} from './styles';
import {ButtonProps} from './types';

export const Button = ({backgroundColor, onPress, Icon}: ButtonProps) => {
  return (
    <ButtonStyled backgroundColor={backgroundColor} onPress={onPress}>
      {Icon}
    </ButtonStyled>
  );
};
