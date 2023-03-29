import React from 'react';

export interface JoinProps {
  callerId: string;
  value: React.MutableRefObject<null>;
  setValue: (text: string) => void;
  onPressCall: () => void;
}
