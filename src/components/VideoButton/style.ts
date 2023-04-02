import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{localVideo: boolean}>`
  border-width: 1.5px;
  border-color: #2b3034;
  background-color: ${({localVideo}) => (!localVideo ? '#fff' : 'transparent')};
`;
