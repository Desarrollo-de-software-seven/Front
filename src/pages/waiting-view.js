import React from 'react';
import {
  CssBaseline, Container,
} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import RecruitingView from '../../src/recruitment-process/recruitment_view';
import Assistant from '../components/assistant';

// const fecha = new Date();

export default function WaitingView() {
  return (
    <>
      <Container component="main" maxWidth="lg">

        <CssBaseline />
        <Assistant/>
      </Container>
    </>
  );
}
