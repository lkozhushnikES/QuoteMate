import React, { useState, useRef } from 'react';
import { enqueueMedia } from '../utils/storage';

const CameraCapture: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    }
  };

  const takePhoto = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.drawImage(videoRef.current, 0, 0);
    const dataUrl = canvas.toDataURL('image/jpeg');
    setPhoto(dataUrl);
    enqueueMedia({ type: 'image', data: dataUrl, timestamp: Date.now() });
  };

  return (
    <div>
      <h2>Photo Capture</h2>
      <button onClick={startCamera}>Start Camera</button>
      <button onClick={takePhoto}>Capture Photo</button>
      <div>
        <video ref={videoRef} style={{ width: '300px' }} />
        {photo && <img src={photo} alt="Captured" style={{ width: '300px', marginTop: '0.5rem' }} />}
      </div>
    </div>
  );
};

export default CameraCapture;