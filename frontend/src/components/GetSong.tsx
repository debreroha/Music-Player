/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import { getSongsFetch, rootState } from '../songState/songsState';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const itemStyle = css`
  margin-bottom: 10px;
`;
const getButtonColor = (category: string) => {
  switch (category) {
    case 'title':
      return 'red';
    case 'artist':
      return 'green';
    case 'album':
      return 'blue';
    case 'genre':
      return 'orange';
    default:
      return 'gray';
  }
};
const buttonStyle = (category: string) => css`
  margin-left: 5px;
  background-color: ${getButtonColor(category)};
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
`;

const GetSong: React.FC = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state: rootState) => state.songs.songs);
  const [distinctData, setDistinctData] = useState<{ [key: string]: string[] }>({});
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleButtonClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    dispatch(getSongsFetch());
  };

  useEffect(() => {
    if (songs && selectedCategory) {
      const uniqueData: { [key: string]: Set<string> } = {
        title: new Set<string>(),
        artist: new Set<string>(),
        album: new Set<string>(),
        genre: new Set<string>(),
      };

      songs.forEach((item) => {
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

  const handleDelete = (item: string) => {
    // Add your logic to dispatch an action to delete the item
    console.log(`Deleting ${item}`);
  };

  const handleEdit = (item: string) => {
    // Add your logic to dispatch an action to edit the item
    console.log(`Editing ${item}`);
  };

  

  return (
    <div>
      <button onClick={() => handleButtonClick('title')} css={buttonStyle('title')}>
        {selectedCategory === 'title' ? 'Undo' : 'Titles'}
      </button>

      <button onClick={() => handleButtonClick('artist')} css={buttonStyle('artist')}>
        {selectedCategory === 'artist' ? 'Undo' : 'Artists'}
      </button>

      <button onClick={() => handleButtonClick('album')} css={buttonStyle('album')}>
        {selectedCategory === 'album' ? 'Undo' : 'Albums'}
      </button>

      <button onClick={() => handleButtonClick('genre')} css={buttonStyle('genre')}>
        {selectedCategory === 'genre' ? 'Undo' : 'Genres'}
      </button>

      {selectedCategory && distinctData[selectedCategory] && (
        <div>
          <h2>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}:</h2>

          {distinctData[selectedCategory].map((item, index) => (
            <div key={index} css={itemStyle}>
              <FontAwesomeIcon icon={faMusic} /> {item}
              <button onClick={() => handleEdit(item)} css={buttonStyle(selectedCategory)}>
                <FontAwesomeIcon icon={faEdit} /> Edit
              </button>
              <button onClick={() => handleDelete(item)} css={buttonStyle(selectedCategory)}>
                <FontAwesomeIcon icon={faTrashAlt} /> Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetSong;