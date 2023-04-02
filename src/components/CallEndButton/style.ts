import styled from 'styled-components/native';
import {Button} from '../IconButton';

export const Container = styled(Button).attrs({
  backgroundColor: '#f80404',
})`
  margin-vertical: 12px;
  flex-direction: row;
  justify-content: space-evenly;
`;
