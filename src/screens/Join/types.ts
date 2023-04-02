export interface JoinProps {
  callerId: string;
  value: string | null;
  onChange: (text: string) => void;
  onPressCall: () => void;
}
