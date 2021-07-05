import React, { useState, useCallback, useEffect } from 'react';
import { jwt } from 'twilio';
import { CssBaseline } from '@material-ui/core';
import crypto from 'crypto';
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
  const [username, setUsername] = useState('');
  // const [roomName, setRoomName] = useState(crypto.randomBytes(20).toString('hex'));
  const [roomName, setRoomName] = useState('');
  const [token, setToken] = useState(null);
  const AccessToken = jwt.AccessToken;
  const { VideoGrant } = AccessToken;

  const handleUsernameChange = useCallback(event => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback(event => {
    setRoomName(event.target.value);
  }, []);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    try {
      const videoGrant = new VideoGrant({ room: roomName });
      const newToken = new AccessToken(
        config.accountSid,
        config.apiKey,
        config.apiSecret,
      );
      newToken.addGrant(videoGrant);
      newToken.identity = username;
      setToken(newToken.toJwt());
    } catch (error) {
      console.log(error);
    }
  }, [username, roomName]);

  const handleLogout = useCallback(() => {
    setUsername('');
    setRoomName('');
    setToken(null);
    // eslint-disable-next-line no-undef
    window.location.replace('/form');
  }, []);

  // useEffect(() => {
  //   handleSubmit();
  // }, []);

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
        <Lobby
          username={username}
          roomName={roomName}
          handleUsernameChange={handleUsernameChange}
          handleRoomNameChange={handleRoomNameChange}
          handleSubmit={handleSubmit}
        />
      </>
    );
  }

  return render;
};

export default VideoChat;
