import React from 'react';
import {
  CssBaseline, Box, Typography, Container,
} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import RecruitingView from '../../src/recruitment-process/recruitment_view';
import ProductCard from '../components/card';
import Catalog from '../components/catalog';

const fecha = new Date();

export default function Ejemplo() {
  const value = true;
  return (
    <>
      <Container component="main" maxWidth="lg">

        <CssBaseline />
        <Catalog/>
      </Container>
    </>
  );
}
