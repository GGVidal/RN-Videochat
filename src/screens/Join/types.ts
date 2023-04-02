export interface JoinProps {
  callerId: string;
  value: string | null;
  setValue: (text: string) => void;
  onPressCall: () => void;
}
