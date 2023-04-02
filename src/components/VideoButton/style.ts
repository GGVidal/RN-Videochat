import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{localVideo: boolean}>`
  border-width: 1.5px;
  border-color: #2b3034;
  background-color: ${({localVideo}) => (!localVideo ? '#fff' : 'transparent')};
  border-radius: 30px;
  height: 40px;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
`;
