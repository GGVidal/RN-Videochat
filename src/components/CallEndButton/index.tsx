import React from 'react';
import CallEnd from '../../assets/CallEnd';
import {Container} from './style';
import {CallEndButtonProps} from './types';

export const CallEndButton = ({onPress}: CallEndButtonProps) => {
  return (
    <Container
      backgroundColor="red"
      onPress={onPress}
      Icon={<CallEnd height={26} width={26} fill="#FFF" />}
    />
  );
};
