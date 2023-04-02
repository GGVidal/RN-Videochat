import React from 'react';
import CallEnd from '../../assets/CallEnd';
import {Container} from './style';
import {CallEndButtonProps} from './types';

export const CallEndButton = ({onPress}: CallEndButtonProps) => {
  return (
    <Container onPress={onPress}>
      <CallEnd on height={26} width={26} fill="#FFF" />
    </Container>
  );
};
