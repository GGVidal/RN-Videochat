import React from 'react';
import {CallEndButton} from './src/components/CallEndButton';
import {MicButton} from './src/components/MicButton';
import {VideoButton} from './src/components/VideoButton';
import {SwitchCameraButton} from './src/components/SwitchCameraButton';
import {Join} from './src/screens/Join';
import {WebrtcRoom} from './src/screens/WebrtcRoom';
import {IncomingCall} from './src/screens/IncomingCall';
import {OutgoingCall} from './src/screens/OutgoingCall';
import {useWebRTC} from './src/hooks/useWebRTC';
// import InCallManager from 'react-native-incall-manager';

export default function App({}) {
  const {
    callerId,
    leave,
    localMicOn,
    localStream,
    localWebcamOn,
    onAcceptCall,
    onChangeOtherUserId,
    onProcessCall,
    onRejectCall,
    otherUserId,
    remoteStream,
    switchCamera,
    toggleCamera,
    toggleMic,
    type,
  } = useWebRTC();

  const WebrtcRoomScreen = () => {
    return (
      <WebrtcRoom localStream={localStream} remoteStream={remoteStream}>
        <CallEndButton onPress={leave} />
        <MicButton onPress={toggleMic} localMicOn={localMicOn} />
        <VideoButton localVideo={localWebcamOn} onPress={toggleCamera} />
        <SwitchCameraButton onPress={switchCamera} />
      </WebrtcRoom>
    );
  };

  switch (type) {
    case 'JOIN':
      return (
        <Join
          value={otherUserId.current}
          callerId={callerId}
          onPressCall={() => {
            onProcessCall();
          }}
          onChange={text => {
            onChangeOtherUserId(text);
          }}
        />
      );
    case 'INCOMING_CALL':
      return (
        <IncomingCall
          otherUserId={otherUserId.current}
          onPress={() => {
            onAcceptCall();
          }}
        />
      );
    case 'OUTGOING_CALL':
      return (
        <OutgoingCall
          otherUserId={otherUserId.current}
          onPress={() => {
            onRejectCall();
          }}
        />
      );
    case 'WEBRTC_ROOM':
      return WebrtcRoomScreen();
    default:
      return null;
  }
}
