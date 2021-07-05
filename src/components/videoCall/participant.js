import React, { useState, useEffect, useRef } from 'react';

const Participant = ({ participant }) => {
  const [videoTracks, setVideoTracks] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);

  const videoRef = useRef();
  const audioRef = useRef();

  const trackpubsToTracks = trackMap => Array.from(trackMap.values())
    .map(publication => publication.track)
    .filter(track => track !== null);

  useEffect(() => {
    const trackSubscribed = track => {
      if (track.kind === 'video') {
        setVideoTracks(prevVideoTracks => [...prevVideoTracks, track]);
      } else {
        setAudioTracks(prevAudioTracks => [...prevAudioTracks, track]);
      }
    };

    const trackUnsubscribed = track => {
      if (track.kind === 'video') {
        setVideoTracks(prevVideoTracks => prevVideoTracks.filter(v => v !== track));
      } else {
        setAudioTracks(prevAudioTracks => prevAudioTracks.filter(a => a !== track));
      }
    };

    setVideoTracks(trackpubsToTracks(participant.videoTracks));
    setAudioTracks(trackpubsToTracks(participant.audioTracks));

    participant.on('trackSubscribed', trackSubscribed);
    participant.on('trackUnsubscribed', trackUnsubscribed);

    return () => {
      setVideoTracks([]);
      setAudioTracks([]);
      participant.removeAllListeners();
    };
  }, [participant]);

  useEffect(() => {
    const videoTrack = videoTracks[0];
    if (videoTrack) {
      videoTrack.attach(videoRef.current);

      return () => {
        videoTrack.detach();
      };
    }
  }, [videoTracks]);

  useEffect(() => {
    const audioTrack = audioTracks[0];
    if (audioTrack) {
      audioTrack.attach(audioRef.current);

      return () => {
        audioTrack.detach();
      };
    }
  }, [audioTracks]);

  return (
    <div className="participant" style={{ width: '100%', marginLeft: 40, height: '100%' }}>
      <h3>{participant.identity}</h3>
      <video ref={videoRef} autoPlay={true} style={{ width: '75%', marginLeft: '10%' }}/>
      <audio ref={audioRef} autoPlay={true}/>
    </div>
  );
};

export default Participant;
