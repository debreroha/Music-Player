import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongsAsync } from '../redux/songsSlice';

const SongsPage = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(fetchSongsAsync());
  }, [dispatch]);

  return (
    <div>
      <h1>Songs</h1>
      {songs.map((song) => (
        <div key={song.id}>
          <h3>{song.title}</h3>
          <p>{song.artist}</p>
        </div>
      ))}
    </div>
  );
};

export default SongsPage;