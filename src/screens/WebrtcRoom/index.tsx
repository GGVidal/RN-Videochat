import React from 'react';
import {Container, RTCContainer, RTC, ButtonsContainer} from './style';
import {WebrtcRoomProps} from './types';

export const WebrtcRoom = ({
  children,
  localStream,
  remoteStream,
}: WebrtcRoomProps) => {
  return (
    <Container>
      {localStream ? (
        <RTCContainer>
          <RTC objectFit={'cover'} streamURL={localStream.toURL()} />
        </RTCContainer>
      ) : null}
      {remoteStream ? (
        <RTCContainer>
          <RTC objectFit={'cover'} streamURL={remoteStream.toURL()} />
        </RTCContainer>
      ) : null}
      <ButtonsContainer>{children}</ButtonsContainer>
    </Container>
  );
};
