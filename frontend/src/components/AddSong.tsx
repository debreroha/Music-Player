import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addSongFetch, SongType } from '../songState/songsState';
import styled from '@emotion/styled';

const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`;

// declare form variable for styling
const Form = styled.form`
  margin-top: 20px;
`;

// declare label variable
const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const TextInput = styled.input`
  padding: 5px;
  width: 200px;
  margin-top: 5px;
`;

const AddSong: React.FC = () => {
  const dispatch = useDispatch();

  const [newSong, setNewSong] = useState<SongType>({
    title: '',
    artist: '',
    album: '',
    genre: '',
  });

  // State to track whether the form should be displayed
  const [showForm, setShowForm] = useState(false);

  const handleAddSong = () => {
    dispatch({
      type: 'songs/addSongFetch',
      payload: {
        title: newSong.title,
        artist: newSong.artist,
        album: newSong.album,
        genre: newSong.genre,
      },
    });

    setNewSong({
      title: '',
      artist: '',
      album: '',
      genre: '',
    });

    // After adding the song, hide the form
    setShowForm(false);
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
      {/* Display button to toggle the form visibility */}
      <Button type="button" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Add Song'}
      </Button>

      {/* Display the form only when showForm is true */}
      {showForm && (
        <Form>
          <Label>
            Title:
            <TextInput type="text" name="title" value={newSong.title} onChange={handleChange} />
          </Label>
          <Label>
            Artist:
            <TextInput type="text" name="artist" value={newSong.artist} onChange={handleChange} />
          </Label>
          <Label>
            Album:
            <TextInput type="text" name="album" value={newSong.album} onChange={handleChange} />
          </Label>
          <Label>
            Genre:
            <TextInput type="text" name="genre" value={newSong.genre} onChange={handleChange} />
          </Label>
          <Button type="button" onClick={handleAddSong}>
            Add Song
          </Button>
        </Form>
      )}
    </div>
  );
};

export default AddSong;
