import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';

const LiveFaceDetection = ({ stopCamera }) => {
  const webcamRef = useRef(null);
  const [warning, setWarning] = useState('');
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const intervalRef = useRef(null);

  // Load Face API models
  useEffect(() => {
    const loadModels = async () => {
      try {
        await Promise.all([
          faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
          faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
          faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        ]);
        setIsModelLoaded(true);
        console.log('✅ Models loaded');
      } catch (err) {
        console.error('❌ Error loading models:', err);
      }
    };
    loadModels();
  }, []);

  // Face detection logic
  useEffect(() => {
    const detectFaces = async () => {
      const video = webcamRef.current?.video;
      if (!video || !isModelLoaded) return;

      try {
        const detections = await faceapi.detectAllFaces(video)
          .withFaceLandmarks()
          .withFaceDescriptors();

        console.log('Detections:', detections.length);

        // Multiple people
        if (detections.length > 1) {
          setWarning('⚠️ Warning: More than one person detected!');
          return;
        }

        // One person posture check
        if (detections.length === 1) {
          const landmarks = detections[0].landmarks;
          const leftEye = landmarks.getLeftEye();
          const rightEye = landmarks.getRightEye();
          const nose = landmarks.getNose();

          const eyeDistance = Math.abs(leftEye[0].x - rightEye[3].x);
          const noseCenter = nose[3].x;
          const faceCenter = (leftEye[0].x + rightEye[3].x) / 2;

          if (Math.abs(noseCenter - faceCenter) > eyeDistance * 0.3) {
            setWarning('⚠️ Please sit straight and face the camera!');
            return;
          }
        }

        // All good
        setWarning('');
      } catch (err) {
        console.error('❌ Detection error:', err);
      }
    };

    if (isModelLoaded && webcamRef.current && webcamRef.current.video) {
      intervalRef.current = setInterval(detectFaces, 400);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isModelLoaded, stopCamera]);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">Live Face Detection</h1>

      <div className="relative w-full max-w-md mb-4">
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={{ facingMode: 'user' }}
          className="w-full rounded-lg shadow-lg border border-gray-300"
        />
      </div>

      {/* Warning */}
      {warning && <p className="text-red-500 font-medium text-lg">{warning}</p>}

      {/* Loading state */}
      {!isModelLoaded && (
        <p className="text-blue-500 font-medium text-lg">Loading Face Detection Model...</p>
      )}
    </div>
  );
};

export default LiveFaceDetection;
