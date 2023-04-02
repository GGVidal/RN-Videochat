import styled from 'styled-components/native';
import {Button} from '../IconButton';

export const Container = styled(Button)<{localMicOn: boolean}>`
  border-width: 1.5px;
  border-color: #2b3034;
  background-color: ${({localMicOn}) => (!localMicOn ? '#fff' : 'transparent')};
`;
