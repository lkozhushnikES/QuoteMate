import React from 'react';
import CameraCapture from './components/CameraCapture';
import AudioRecorder from './components/AudioRecorder';
import UploadStatus from './components/UploadStatus';
import QuoteList from './components/QuoteList';

const App: React.FC = () => {
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '1rem' }}>
      <h1>Fence Quote App</h1>
      <p>Capture images & audio and generate quotes.</p>
      <section>
        <CameraCapture />
        <AudioRecorder />
        <UploadStatus />
      </section>
      <section>
        <QuoteList />
      </section>
    </main>
  );
};

export default App;