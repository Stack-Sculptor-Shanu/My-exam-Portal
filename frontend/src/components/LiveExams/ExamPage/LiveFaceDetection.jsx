import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';

const LiveFaceDetection = ({ stopCamera }) => {
  const webcamRef = useRef(null);
  const [warning, setWarning] = useState('');
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const intervalRef = useRef(null);

  // Load face-api.js models
  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.ssdMobilenetv1.loadFromUri('/models'); // Assuming models are in public/models folder
      await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
      await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
      setIsModelLoaded(true);
    };

    loadModels();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const detectFaces = async () => {
      if (webcamRef.current && webcamRef.current.video.readyState === 4 && isModelLoaded) {
        const video = webcamRef.current.video;
        const detections = await faceapi.detectAllFaces(video)
          .withFaceLandmarks()
          .withFaceDescriptors();

        // If more than one person is detected, show a warning
        if (detections.length > 1) {
          setWarning('Warning: More than one person detected!');
          setTimeout(() => {
            setWarning('');
          }, 4000);
        } else {
          setWarning('');
        }
      }
    };

    if (!stopCamera) {
      intervalRef.current = setInterval(() => detectFaces(), 100);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);  // Stop face detection interval
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);  // Cleanup face detection interval on unmount or stopCamera change
      }
    };
  }, [stopCamera, isModelLoaded]);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">Live Face Detection</h1>

      {/* Webcam Section */}
      <div className="relative w-full max-w-md mb-4">
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={{
            facingMode: 'user',
          }}
          className="w-full rounded-lg shadow-lg border border-gray-300"
        />
      </div>

      {/* Warning Message */}
      {warning && (
        <p className="text-red-500 font-medium text-lg">{warning}</p>
      )}

      {!isModelLoaded && <p className="text-blue-500 font-medium text-lg">Loading Face Detection Model...</p>}
    </div>
  );
};

export default LiveFaceDetection;
