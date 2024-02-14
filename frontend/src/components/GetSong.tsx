import React, { useEffect, useState } from 'react';
import { getSongsFetch, rootState } from '../songState/songsState';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';

interface SongType {
  [key: string]: string | undefined;
}

const StyledButton = styled.button`
  background-color: #3498db;
  color: #ffffff;
  border: none;
  margin: 5px;
  padding: 8px;
  cursor: pointer;
`;

const StyledDropdown = styled.select`
  margin-top: 10px;
  padding: 5px;
`;

const GetSong: React.FC = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state: rootState) => state.songs.songs);
  const properties = ['Title', 'Artist', 'Album', 'Genre'];
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [distinctValues, setDistinctValues] = useState<string[]>([]);

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  const handlePropertyClick = (property: string) => {
    setSelectedProperty(property);
    const values = Array.from(
      new Set(songs.map((item) => String(item[property as keyof typeof item] ?? '') as string))    );
    setDistinctValues(values);
  };

  return (
    <div>
      <h1>Properties</h1>
      <div>
        {properties.map((property, index) => (
          <StyledButton key={index} onClick={() => handlePropertyClick(property)}>
            {property}
          </StyledButton>
        ))}
      </div>
      {selectedProperty && (
        <div>
          <h2>{selectedProperty} Values</h2>
          <StyledDropdown>
            {distinctValues.map((value, index) => (
              <option key={index}>{value}</option>
            ))}
          </StyledDropdown>
        </div>
      )}
    </div>
  );
};

export default GetSong;
