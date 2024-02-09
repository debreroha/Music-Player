import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong } from '../redux/songsSlice';

const SongForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    album: '',
    genre: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSong(formData));
    setFormData({ title: '', artist: '', album: '', genre: '' });
  };

  return (
    <div>
     Apologies for the incomplete response. Here's the continuation of the code for Step 7:

```javascript
      <h2>Add Song</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Artist:
          <input
            type="text"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
          />
        </label>
        <label>
          Album:
          <input
            type="text"
            name="album"
            value={formData.album}
            onChange={handleChange}
          />
        </label>
        <label>
          Genre:
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default SongForm;