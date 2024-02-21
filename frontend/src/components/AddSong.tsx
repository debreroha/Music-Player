import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addSongFetch, SongType } from '../songState/songsState';

const AddSong: React.FC = () => {
  const dispatch = useDispatch();

  const [newSong, setNewSong] = useState<SongType>({
    title: '',
    artist: '',
    album: '',
    genre: '',
  });

  const handleAddSong = () => {
    // Dispatch the addSongFetch action with the newSong details
    dispatch({
      type: 'songs/addSongFetch',
      payload: {
        title: newSong.title,
        artist: newSong.artist,
        album: newSong.album,
        genre: newSong.genre,
        // Add other properties as needed
      },
    });
  
    // Reset the state to clear the form
    setNewSong({
      title: '',
      artist: '',
      album: '',
      genre: '',
    });
  };
  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewSong((prevSong) => ({
      ...prevSong,
      [name]: value,
    }));
  };

  return (
    <div>
      <form>
        <label>
          Title:
          <input type="text" name="title" value={newSong.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Artist:
          <input type="text" name="artist" value={newSong.artist} onChange={handleChange} />
        </label>
        <br />
        <label>
          Album:
          <input type="text" name="album" value={newSong.album} onChange={handleChange} />
        </label>
        <br />
        <label>
          Genre:
          <input type="text" name="genre" value={newSong.genre} onChange={handleChange} />
        </label>
        <br />
        <button type="button" onClick={handleAddSong}>
          Add Song
        </button>
      </form>
    </div>
  );
};

export default AddSong;