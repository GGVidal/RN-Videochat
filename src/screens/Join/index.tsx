import React from 'react';
import TextInputContainer from '../../components/TextInputContainer';
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

export const Join = ({callerId, value, setValue, onPressCall}: JoinProps) => {
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
            <TextInputContainer
              placeholder="Enter Caller ID"
              value={value}
              keyboardType={'number-pad'}
              setValue={setValue}
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
