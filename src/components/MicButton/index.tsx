import React from 'react';
import MicOff from '../../assets/MicOff';
import MicOn from '../../assets/MicOn';
import {Container} from './style';
import {MicProps} from './types';

export const MicButton = ({onPress, localMicOn}: MicProps) => {
  return (
    <Container localMicOn={localMicOn} onPress={onPress}>
      {localMicOn && <MicOn height={24} width={24} fill="#FFF" />}
      {!localMicOn && <MicOff height={28} width={28} fill="#1D2939" />}
    </Container>
  );
};
