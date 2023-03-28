import React from 'react';
import CameraSwitch from '../../assets/CameraSwitch';
import {Container} from './style';
import {SwitchCameraProps} from './types';

export const SwitchCameraButton = ({onPress}: SwitchCameraProps) => {
  return (
    <Container
      onPress={onPress}
      Icon={<CameraSwitch height={24} width={24} fill="#FFF" />}
    />
  );
};
