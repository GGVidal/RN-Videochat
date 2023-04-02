import {ReactNode} from 'react';

export interface ButtonProps {
  Icon?: ReactNode;
  onPress?: () => void;
  backgroundColor?: string;
}
