import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{localMicOn: boolean}>`
  border-width: 1.5px;
  border-color: #2b3034;
  background-color: ${({localMicOn}) => (!localMicOn ? '#fff' : 'transparent')};
`;
