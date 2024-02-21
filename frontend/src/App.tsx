import React from 'react';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import { getSongsFetch, addSongFetch  } from './songState/songsState';
import { useEffect } from "react";
import { rootState } from './songState/songsState';
import GetSong from './components/GetSong';
import AddSong from './components/AddSong';

const App = () => {
  return (
    <>
      <GetSong />
      <AddSong />

    </>
  );
};

export default App;
