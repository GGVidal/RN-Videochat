import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #050a0e;
  justify-content: center;
  padding-horizontal: 42;
  ${`
    behavior: ${Platform.OS === 'ios' ? 'padding' : 'height'};
  `}
`;

export const Wrapper = styled.View`
  padding: 35px;
  background-color: #1a1c22;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #d0d4dd;
`;

export const CallerIdContainer = styled.View`
  flex-direction: row;
  margin-top: 12px;
  align-items: center;
`;

export const CallerId = styled.Text`
  font-size: 32px;
  color: #ffff;
  letter-spacing: 6px;
`;

export const InputWrapper = styled.View`
  background-color: #1a1c22;
  padding: 40px;
  margin-top: 25px;
  justify-content: center;
  border-radius: 14px;
`;

export const InputTitle = styled.Text`
  font-size: 18px;
  color: #d0d4dd;
`;

export const CallButton = styled.TouchableOpacity`
  height: 50px;
  background-color: #5568fe;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-top: 16px;
`;

export const CallButtonText = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;

export const DismissKeyboard = styled.TouchableWithoutFeedback``;
