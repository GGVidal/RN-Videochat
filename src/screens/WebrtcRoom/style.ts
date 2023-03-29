import {RTCView} from 'react-native-webrtc';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #050a0e;
  padding-horizontal: 12px;
  padding-vertical: 12px;
`;

export const RTCContainer = styled.View`
  flex: 1;
  background-color: #050a0e;
`;

export const RTC = styled(RTCView)`
  flex: 1;
  background-color: #050a0e;
  margin-top: 8px;
`;

export const ButtonsContainer = styled.View`
  margin-vertical: 12px;
  flex-direction: row;
  justify-content: space-evenly;
`;
