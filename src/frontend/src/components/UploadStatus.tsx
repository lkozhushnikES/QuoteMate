import React, { useEffect, useState } from 'react';
import { getQueueLength } from '../utils/storage';

const UploadStatus: React.FC = () => {
  const [len, setLen] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setLen(getQueueLength()), 1500);
    return () => clearInterval(id);
  }, []);

  return <p>Offline Queue Items: {len}</p>;
};

export default UploadStatus;