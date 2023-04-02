import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  background-color: #050a0e;
`;

export const ContentContainer = styled.View`
  padding: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #d0d4dd;
`;

export const OtherUserIdText = styled.Text`
  font-size: 36px;
  margin-top: 12px;
  color: #ffff;
  letter-spacing: 6px;
`;

export const CallButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CallButton = styled.TouchableOpacity`
  background-color: #ff5d5d;
  border-radius: 30px;
  height: 60px;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
`;

export const CallButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
