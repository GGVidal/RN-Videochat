export interface JoinProps {
  callerId: string;
  value: string;
  onChange: (text: string) => void;
  onPressCall: () => void;
}
