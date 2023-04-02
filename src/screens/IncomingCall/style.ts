import styled from 'styled-components/native';
import CallAnswer from '../../assets/CallAnswer';

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  background-color: #050a0e;
`;

export const Card = styled.View`
  padding: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
`;

export const Title = styled.Text`
  font-size: 36px;
  margin-top: 12px;
  color: #ffff;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: green;
  border-radius: 30px;
  height: 60px;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
`;

export const CallAnswerIcon = styled(CallAnswer).attrs({
  height: 28,
  fill: '#fff',
})``;
