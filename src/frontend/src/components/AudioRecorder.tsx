import React, { useState, useRef } from 'react';
import { enqueueMedia } from '../utils/storage';

const AudioRecorder: React.FC = () => {
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mr = new MediaRecorder(stream);
    chunksRef.current = [];
    mr.ondataavailable = e => e.data && chunksRef.current.push(e.data);
    mr.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
      const reader = new FileReader();
      reader.onloadend = () => {
        enqueueMedia({ type: 'audio', data: reader.result as string, timestamp: Date.now() });
      };
      reader.readAsDataURL(blob);
    };
    mediaRecorderRef.current = mr;
    mr.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  return (
    <div>
      <h2>Audio Recorder</h2>
      {!recording && <button onClick={startRecording}>Start</button>}
      {recording && <button onClick={stopRecording}>Stop</button>}
      {audioUrl && <audio controls src={audioUrl} />}
    </div>
  );
};

export default AudioRecorder;