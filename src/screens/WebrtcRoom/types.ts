import {PropsWithChildren} from 'react';
import {MediaStream} from 'react-native-webrtc';

export interface WebrtcRoomProps extends PropsWithChildren {
  localStream: MediaStream;
  remoteStream: MediaStream;
}
