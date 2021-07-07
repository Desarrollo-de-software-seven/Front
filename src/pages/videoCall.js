import React, { useState, useCallback, useEffect } from 'react';
import { jwt } from 'twilio';
import { CssBaseline } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Lobby from '../components/videoCall/lobby';
import Room from '../components/videoCall/room';
import Navbar from '../components/navbar';

const config = {
  // eslint-disable-next-line no-undef
  accountSid: process.env.REACT_APP_TWILIO_ACCOUNT_SID,
  // eslint-disable-next-line no-undef
  apiKey: process.env.REACT_APP_TWILIO_API_KEY,
  // eslint-disable-next-line no-undef
  apiSecret: process.env.REACT_APP_TWILIO_API_SECRET,
};

// eslint-disable-next-line max-statements
const VideoChat = () => {
  const { id } = useParams();
  const [username, setUsername] = useState('Cliente');
  // const [roomName, setRoomName] = useState(crypto.randomBytes(20).toString('hex'));
  const [roomName, setRoomName] = useState(id);
  const [token, setToken] = useState(null);

  const handleSubmit = useCallback(async () => {
    // event.preventDefault();
    try {
      axios.post('http://swdev6.ing.puc.cl/report', { StoreId: id }, {
        headers: {
          // eslint-disable-next-line max-len
          'Authorization': 'Bearer ',
        },
      });
      // const videoGrant = new VideoGrant({ room: roomName });
      // const newToken = new AccessToken(
      //   config.accountSid,
      //   config.apiKey,
      //   config.apiSecret,
      // );
      // newToken.addGrant(videoGrant);
      // newToken.identity = username;
      // eslint-disable-next-line no-undef
      const data = await fetch('/video/token', {
        method: 'POST',
        body: JSON.stringify({
          identity: username,
          room: roomName,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => res.json());
      setToken(data.token);
    } catch (error) {
      console.log(error);
    }
  }, [username, roomName]);

  const handleLogout = useCallback(() => {
    axios.patch('http://swdev6.ing.puc.cl/report/noAns', { 'StoreId': id });
    setUsername('');
    setRoomName('');
    setToken(null);
    const url = `/${id}/form`;
    // eslint-disable-next-line no-undef
    window.location.replace(url);
  }, []);

  useEffect(() => {
    if (roomName) {
      handleSubmit();
    }
  }, [roomName]);

  let render;
  if (token) {
    render = (
      <>
        <CssBaseline />
        <Navbar />
        <Room roomName={roomName} token={token} handleLogout={handleLogout} />
      </>
    );
  } else {
    render = (
      <>
        <CssBaseline />
        <Navbar />
      </>
    );
  }

  return render;
};

export default VideoChat;
