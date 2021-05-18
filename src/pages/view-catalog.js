import React from 'react';
import {
  CssBaseline, Container,
} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import RecruitingView from '../../src/recruitment-process/recruitment_view';
import Catalog from '../components/catalog';

// const fecha = new Date();

export default function ViewCatalog() {
  return (
    <>
      <Container component="main" maxWidth="lg">

        <CssBaseline />
        <Catalog/>
      </Container>
    </>
  );
}
