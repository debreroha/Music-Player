import express from 'express';
import { getSongs, addSong, getSongById, 
    deleteSongById, updateSongById, 
    getSongsByAlbum, getSongsByTitle, 
    getSongsByArtist, getSongsByGenre } from '../controllers/songController.js';

const router = express.Router();

// list or access all songs
router.route('/').get(getSongs);

// create/add a new song
router.route('/add').post(addSong);

// fetch songs by id
router.route('/:id').get(getSongById);

// delete song
router.route('/:id').delete(deleteSongById);

// update song
router.route('/update/:id').put(updateSongById);

// GET songs by title
router.route('/title/:title').get(getSongsByTitle);

// GET songs by artist name
router.route('/artist/:artist').get(getSongsByArtist);

// GET songs by album
router.route('/album/:album').get(getSongsByAlbum);

// GET songs by genre
router.route('/genre/:genre').get(getSongsByGenre);

export default router;
