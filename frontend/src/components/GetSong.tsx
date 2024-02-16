import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getSongsFetch,
  addSongFetch,
  editSongFetch,
  deleteSongFetch,
  rootState,
  SongType,
} from '../songState/songsState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const GetSong: React.FC = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state: rootState) => state.songs.songs);
  const [distinctData, setDistinctData] = useState<{ [key: string]: string[] }>({});
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleButtonClick = (category: string) => {
    setSelectedCategory((prevCategory) => (prevCategory === category ? null : category));
    dispatch(getSongsFetch());
  };

  const handleAddSong = () => {
    const newSong: SongType = {
      title: 'New Song',
      artist: 'New Artist',
      album: 'New Album',
      genre: 'New Genre',
    };

    dispatch(addSongFetch(newSong));
  };

  const handleEditSong = (index: number, field: string, newValue: string) => {
    const editedSong: SongType = { ...songs[index], [field]: newValue };
    dispatch(editSongFetch(editedSong)); // Pass the edited song only
  };

  const handleDeleteSong = (index: number) => {
    const songId = songs[index]?._id;
    if (songId) {
      dispatch(deleteSongFetch(songId));
    }
  };

  useEffect(() => {
    if (songs && selectedCategory) {
      const uniqueData: { [key: string]: Set<string> } = {
        title: new Set<string>(),
        artist: new Set<string>(),
        album: new Set<string>(),
        genre: new Set<string>(),
      };

      songs.forEach((item: SongType) => {
        uniqueData.title.add(item.title);
        uniqueData.artist.add(item.artist);
        uniqueData.album.add(item.album);
        uniqueData.genre.add(item.genre);
      });

      setDistinctData({
        title: Array.from(uniqueData.title),
        artist: Array.from(uniqueData.artist),
        album: Array.from(uniqueData.album),
        genre: Array.from(uniqueData.genre),
      });
    }
  }, [songs, selectedCategory]);

  return (
    <div>
      <button onClick={() => handleButtonClick('title')}>
        {selectedCategory === 'title' ? 'Undo' : 'Titles'}
      </button>

      <button onClick={() => handleButtonClick('artist')}>
        {selectedCategory === 'artist' ? 'Undo' : 'Artists'}
      </button>

      <button onClick={() => handleButtonClick('album')}>
        {selectedCategory === 'album' ? 'Undo' : 'Albums'}
      </button>

      <button onClick={() => handleButtonClick('genre')}>
        {selectedCategory === 'genre' ? 'Undo' : 'Genres'}
      </button>

      {selectedCategory && distinctData[selectedCategory] && (
        <div>
          <h2>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}:</h2>
          {distinctData[selectedCategory].map((item, index) => (
            <div key={index}>
              <FontAwesomeIcon icon={faMusic} />🎵 {item}
              <button onClick={() => handleEditSong(index, selectedCategory, 'New Song')}>
                Edit
              </button