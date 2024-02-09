import axios from 'axios';

const API_URL = '/api/songs'; // Update the API URL according to your server setup

export const fetchSongs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch songs');
  }
};

export const createSong = async (songData) => {
  try {
    const response = await axios.post(`${API_URL}/add`, songData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create song');
  }
};

export const updateSong = async (id, songData) => {
  try {
    await axios.put(`${API_URL}/update/${id}`, songData);
  } catch (error) {
    throw new Error('Failed to update song');
  }
};

export const deleteSong = async (id) => {
  try {
    await axios.delete(`${API_URL}/delete/${id}`);
  } catch (error) {
    throw new Error('Failed to delete song');
  }
};
export const fetchStatistics  = async (statistics) => {
  try {
    await axios.get(`/api/statistics`);
  } catch (error) {
    throw new Error('Failed to statistics of songs');
  }
};
