import express from 'express';
import { getSongs, addSong, getSongById, deleteSongById, updateSongById } from '../controllers/songController.js';

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

export default router;
