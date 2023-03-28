import styled from 'styled-components/native';
import {Button} from '../Button';

export const Container = styled(Button)<{localVideo: boolean}>`
  border-width: 1.5px;
  border-color: #2b3034;
  background-color: ${({localVideo}) => (!localVideo ? '#fff' : 'transparent')};
`;