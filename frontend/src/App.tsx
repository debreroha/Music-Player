import React from 'react';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import { getSongsFetch, addSongFetch  } from './songState/songsState';
import { useEffect } from "react";
import { rootState } from './songState/songsState';
import GetSong from './components/GetSong';
// import AddSong from './components/AddSong';

const App = () => {
  // const dispatch = useDispatch();
  // const songs = useSelector((state: rootState) => state.songs.songs);

  // useEffect(() => {
  //   dispatch(getSongsFetch());
  // }, [dispatch]);

  // const handleAddSong = () => {
  //   // Dispatch the addSongFetch action when you want to add a new song
  //   dispatch(addSongFetch(/* newSongData */));
  // };

  return (
    <>
  
      <GetSong />
      {/* <AddSong /> */}
      {/* <button onClick={handleAddSong}>Add Song</button> */}

    </>
  );
};

export default App;
