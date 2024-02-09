import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your backend API URL
});

export const fetchSongs = () => API.get('/songs');
export const createSong = (songData) => API.post('/songs', songData);
export const updateSong = (id, songData) => API.patch(`/songs/${id}`, songData);
export const deleteSong = (id) => API.delete(`/songs/${id}`);
export const fetchStatistics = () => API.get('/statistics');

