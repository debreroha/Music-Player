import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongsAsync, deleteSong } from '../redux/songsSlice';

const SongList = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(fetchSongsAsync());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteSong(id));
  };

  return (
    <div>
      <h2>Song List</h2>
      {songs.map((song) => (
        <div key={song.id}>
          <h3>{song.title}</h3>
          <p>Artist: {song.artist}</p>
          <p>Album: {song.album}</p>
          <p>Genre: {song.genre}</p>
          <button onClick={() => handleDelete(song.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default SongList;