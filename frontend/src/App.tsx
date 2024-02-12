import React from 'react';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import { getSongsFetch } from './songState/songsState';
import { useEffect } from "react";
import { rootState } from './songState/songsState';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state: rootState) => state.songs.songs);

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  return (
    <>
  
      <h1>
        {songs?.map((item, index) => (
          <li key={index}>{item.album}</li>
        ))}
      </h1>.
    </>
  );
};

export default App;
