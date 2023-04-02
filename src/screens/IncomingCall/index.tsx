import React from 'react';
import {
  Container,
  Button,
  ButtonContainer,
  CallAnswerIcon,
  Card,
  Title,
} from './style';
import {IncomingCallProps} from './types';

export const IncomingCall = ({onPress, otherUserId}: IncomingCallProps) => {
  return (
    <Container>
      <Card>
        <Title>{otherUserId} is calling..</Title>
      </Card>
      <ButtonContainer>
        <Button onPress={onPress}>
          <CallAnswerIcon />
        </Button>
      </ButtonContainer>
    </Container>
  );
};
