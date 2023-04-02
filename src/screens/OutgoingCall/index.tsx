import React from 'react';
import CallEnd from '../../assets/CallEnd';
import {
  CallButton,
  CallButtonContainer,
  CallButtonText,
  Container,
  ContentContainer,
  OtherUserIdText,
  Title,
} from './style';
import {OutGoingCallProps} from './types';

export const OutgoingCall = ({otherUserId, onPress}: OutGoingCallProps) => {
  return (
    <Container>
      <ContentContainer>
        <Title>Calling to...</Title>
        <OtherUserIdText>{otherUserId}</OtherUserIdText>
      </ContentContainer>
      <CallButtonContainer>
        <CallButton onPress={onPress}>
          <CallEnd width={50} height={12} />
          <CallButtonText>End Call</CallButtonText>
        </CallButton>
      </CallButtonContainer>
    </Container>
  );
};
