import { createSlice } from '@reduxjs/toolkit';
import { fetchSongs, createSong as createSongAPI, updateSong as updateSongAPI, deleteSong as deleteSongAPI } from '../services/api';

const songsSlice = createSlice({
  name: 'songs',
  initialState: [],
  reducers: {
    setSongs: (state, action) => {
      return action.payload;
    },
    addSong: (state, action) => {
      state.push(action.payload);
    },
    updateSong: (state, action) => {
      const { id, ...updatedSong } = action.payload;
      const songIndex = state.findIndex((song) => song.id === id);
      if (songIndex !== -1) {
        state[songIndex] = { ...state[songIndex], ...updatedSong };
      }
    },
    deleteSong: (state, action) => {
      const songIndex = state.findIndex((song) => song.id === action.payload);
      if (songIndex !== -1) {
        state.splice(songIndex, 1);
      }
    },
  },
});

export const { setSongs, addSong, updateSong, deleteSong } = songsSlice.actions;

export const fetchSongsAsync = () => async (dispatch) => {
  try {
    const response = await fetchSongs();
    dispatch(setSongs(response.data));
  } catch (error) {
    console.error('Failed to fetch songs:', error);
  }
};

export const createSongAsync = (songData) => async (dispatch) => {
  try {
    const response = await createSongAPI(songData);
    dispatch(addSong(response.data));
  } catch (error) {
    console.error('Failed to create song:', error);
  }
};

export const updateSongAsync = (id, songData) => async (dispatch) => {
  try {
    await updateSongAPI(id, songData);
    dispatch(updateSong({ id, ...songData }));
  } catch (error) {
    console.error('Failed to update song:', error);
  }
};

export const deleteSongAsync = (id) => async (dispatch) => {
  try {
    await deleteSongAPI(id);
    dispatch(deleteSong(id));
  } catch (error) {
    console.error('Failed to delete song:', error);
  }
};

export default songsSlice.reducer;
