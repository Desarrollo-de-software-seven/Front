import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Navbar from '../components/navbar';
import Recognition from '../components/faceRecognition/recognition';

export default function FaceRecog() {
  return (
    <>
      <CssBaseline />
      <Navbar/>
      <Recognition/>
    </>
  );
}
