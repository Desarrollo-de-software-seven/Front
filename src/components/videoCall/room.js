import React, { useState, useEffect } from 'react';
import Video from 'twilio-video';
import { CircularProgress } from '@material-ui/core';
import Participant from './participant';

const Room = ({ roomName, token, handleLogout }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);

  const remoteParticipants = participants.map(participant => (
    <Participant key={participant.sid} participant={participant} />
  ));

  useEffect(() => {
    const participantConnected = participant => {
      setParticipants(prevParticipants => [...prevParticipants, participant]);
    };
    const participantDisconnected = participant => {
      setParticipants(prevParticipants => prevParticipants.filter(p => p !== participant));
    };
    Video.connect(token, { name: roomName }).then(newRoom => {
      setRoom(newRoom);
      newRoom.on('participantConnected', participantConnected);
      newRoom.on('participantDisconnected', participantDisconnected);
      newRoom.participants.forEach(participantConnected);
    });

    return () => {
      setRoom(currentRoom => {
        if (currentRoom && currentRoom.localParticipant.state === 'connected') {
          currentRoom.localParticipant.tracks.forEach((trackPublication) => {
            trackPublication.track.stop();
          });
          currentRoom.disconnect();

          return null;
        }

        return currentRoom;
      });
    };
  }, [roomName, token]);

  return (
    <div className="room">
      <h2>Room: {roomName}</h2>
      <button onClick={handleLogout}>Log out</button>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '50%', flex: 1 }}>
          {room ? (
            <Participant
              key={room.localParticipant.sid}
              participant={room.localParticipant}
            />
          ) : (
            ''
          )}
        </div>
        <div style={{ width: '10%', flex: 1 }}>
          {remoteParticipants.length ? (
            remoteParticipants
          ) : (
            <div style={{ paddingTop: '30%' }}>
              <CircularProgress style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}/>
              <p style={{ textAlign: 'center' }}>Esperando asistente</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Room;
