import React, { useState } from 'react';
import CameraCapture from './components/CameraCapture';
import AudioRecorder from './components/AudioRecorder';
import JobForm from './components/JobForm';
import QuoteViewer from './components/QuoteViewer';
import { JobData } from './types';

function App() {
  const [step, setStep] = useState(1);
  const [jobData, setJobData] = useState<JobData>({
    customerName: '',
    address: '',
    phoneNumber: '',
    email: '',
    photos: [],
    audioNotes: [],
    description: ''
  });
  const [quoteId, setQuoteId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePhotosCapture = (photos: File[]) => {
    setJobData({ ...jobData, photos });
    setStep(2);
  };

  const handleAudioCapture = (audio: File[]) => {
    setJobData({ ...jobData, audioNotes: audio });
    setStep(3);
  };

  const handleJobSubmit = async (formData: Partial<JobData>) => {
    const completeJobData = { ...jobData, ...formData };
    setJobData(completeJobData);
    setLoading(true);
    
    try {
      const formDataToSend = new FormData();
      Object.entries({
        customerName: completeJobData.customerName,
        address: completeJobData.address,
        phoneNumber: completeJobData.phoneNumber,
        email: completeJobData.email,
        description: completeJobData.description
      }).forEach(([k, v]) => formDataToSend.append(k, v as string));

      completeJobData.photos.forEach((photo, index) =>
        formDataToSend.append(`photo_${index}`, photo)
      );
      completeJobData.audioNotes.forEach((audio, index) =>
        formDataToSend.append(`audio_${index}`, audio)
      );

      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/createJob`, {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) throw new Error('Failed to create job');
      const result = await response.json();
      setQuoteId(result.quoteId);
      setStep(4);
    } catch (e) {
      console.error(e);
      alert('Failed to create quote. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetApp = () => {
    setStep(1);
    setJobData({
      customerName: '',
      address: '',
      phoneNumber: '',
      email: '',
      photos: [],
      audioNotes: [],
      description: ''
    });
    setQuoteId(null);
  };

  return (
    <div className="App">
      <header style={{ 
        background: 'linear-gradient(135deg,#007bff,#0056b3)',
        color: '#fff',
        padding: '30px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ margin: 0 }}>Fence Quote App</h1>
        <p style={{ margin: '8px 0 0' }}>Generate professional quotes on-site</p>
      </header>

      <div className="container">
        <div style={{
          display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', margin: '30px 0'
        }}>
          {[{ n: 1, label: 'Photos' }, { n: 2, label: 'Audio' }, { n: 3, label: 'Details' }, { n: 4, label: 'Quote' }]
            .map(s => (
              <div key={s.n} style={{
                padding: '12px 24px', borderRadius: '24px',
                background: step >= s.n ? '#007bff' : '#e9ecef',
                color: step >= s.n ? '#fff' : '#6c757d', fontWeight: 600
              }}>{s.n}. {s.label}</div>
            ))}
        </div>

        {loading && (
          <div className="card"><div className="loading"><div className="spinner" /><p>Processing your quote...</p></div></div>
        )}

        {!loading && (
          <>
            {step === 1 && <CameraCapture onPhotosCapture={handlePhotosCapture} />}
            {step === 2 && <AudioRecorder onAudioCapture={handleAudioCapture} onSkip={() => setStep(3)} />}
            {step === 3 && <JobForm onSubmit={handleJobSubmit} initialData={jobData} />}
            {step === 4 && quoteId && <QuoteViewer quoteId={quoteId} onReset={resetApp} />}
          </>
        )}
      </div>

      <footer style={{ textAlign: 'center', padding: '20px', color: '#6c757d', marginTop: '50px' }}>
        <p>Powered by Azure AI | © 2025 Fence Quote App</p>
      </footer>
    </div>
  );
}

export default App;