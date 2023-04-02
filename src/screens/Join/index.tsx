import React from 'react';
import {InputCallerId} from './components/InputCallerId';
import {
  CallButton,
  CallButtonText,
  CallerId,
  CallerIdContainer,
  Container,
  DismissKeyboard,
  InputTitle,
  InputWrapper,
  Title,
  Wrapper,
} from './style';
import {JoinProps} from './types';

export const Join = ({callerId, value, onChange, onPressCall}: JoinProps) => {
  return (
    <Container>
      <DismissKeyboard>
        <>
          <Wrapper>
            <Title>Your caller ID</Title>
            <CallerIdContainer>
              <CallerId>{callerId}</CallerId>
            </CallerIdContainer>
          </Wrapper>
          <InputWrapper>
            <InputTitle>Enter call id of another user</InputTitle>
            <InputCallerId
              placeholder="Enter Caller ID"
              value={value}
              onChangeText={onChange}
            />
            <CallButton onPress={onPressCall}>
              <CallButtonText>Call now</CallButtonText>
            </CallButton>
          </InputWrapper>
        </>
      </DismissKeyboard>
    </Container>
  );
};
