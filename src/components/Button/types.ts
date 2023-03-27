import {ReactNode} from 'react';

export interface ButtonProps {
  backgroundColor?: string;
  Icon?: ReactNode;
  onPress?: () => void;
}
