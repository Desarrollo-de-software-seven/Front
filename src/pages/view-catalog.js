import React from 'react';
import {
  CssBaseline, Container,
} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import RecruitingView from '../../src/recruitment-process/recruitment_view';
import Catalog from '../components/catalog';
import Navbar from '../components/navbar';

// const fecha = new Date();

export default function ViewCatalog() {
  return (
    <>
      <Navbar/>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Catalog/>
      </Container>
    </>
  );
}
