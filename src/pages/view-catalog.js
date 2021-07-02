/* eslint-disable no-undef */
/* eslint-disable max-statements */
import React from 'react';
import {
  CssBaseline, Container,
} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import RecruitingView from '../../src/recruitment-process/recruitment_view';
import Catalog from '../components/catalog';
import Navbar from '../components/navbar';

// const fecha = new Date();
const inactivityTime = () => {
  let time;
  function logout() {
    // alert('You are now logged out.');
    location.reload();
  }
  function resetTimer() {
    clearTimeout(time);
    time = setTimeout(logout, 60000);
    // 1000 milliseconds = 1 second
  }
  window.onload = resetTimer;
  // DOM Events
  document.onmousemove = resetTimer;
  document.onkeydown = resetTimer;

  document.onload = resetTimer;
  document.onmousemove = resetTimer;
  document.onmousedown = resetTimer; // touchscreen presses
  document.ontouchstart = resetTimer;
  document.onclick = resetTimer; // touchpad clicks
  document.onkeydown = resetTimer; // onkeypress is deprectaed
  document.addEventListener('scroll', resetTimer, true); // improved; see comments
  window.addEventListener('load', resetTimer, true);
  const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
  events.forEach((name) => {
    document.addEventListener(name, resetTimer, true);
  });
};

export default function ViewCatalog() {
  window.onload = function () {
    inactivityTime();
  };

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
