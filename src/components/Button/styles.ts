import styled from 'styled-components/native';
import {ButtonProps} from './types';

export const ButtonStyled = styled.TouchableOpacity<ButtonProps>`
  border-radius: 30px;
  height: 30px;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
`;
