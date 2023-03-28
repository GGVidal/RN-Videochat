import React from 'react';
import VideoOff from '../../assets/VideoOff';
import VideoOn from '../../assets/VideoOn';
import {Container} from './style';
import {VideoProps} from './types';

export const VideoButton = ({localVideo, onPress}: VideoProps) => {
  return (
    <Container
      localVideo={localVideo}
      onPress={onPress}
      Icon={
        localVideo ? (
          <VideoOn height={24} width={24} fill="#FFF" />
        ) : (
          <VideoOff height={36} width={36} fill="#1D2939" />
        )
      }
    />
  );
};
