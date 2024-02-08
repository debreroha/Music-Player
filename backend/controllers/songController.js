import asyncHandler from "../middleware/asyncHandler.js";
import Song from '../models/song.js';

// Get all songs
// GET /api/songs/
const getSongs = asyncHandler(async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Add a song
// POST /api/songs/add
const addSong = asyncHandler(async (req, res) => {
  try {
    const { title, artist, album, genre } = req.body;
    const newSong = new Song({ title, artist, album, genre });
    await newSong.save();
    res.json({ message: 'Song added!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get a song by ID
// GET /api/songs/:id
const getSongById = asyncHandler(async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    res.json(song);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a song by ID
// DELETE /api/songs/:id
const deleteSongById = asyncHandler(async (req, res) => {
  try {
    await Song.findByIdAndDelete(req.params.id);
    res.json({ message: 'Song deleted.' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a song by ID
// PUT /api/songs/update/:id
const updateSongById = asyncHandler(async (req, res) => {
  try {
    const { title, artist, album, genre } = req.body;
    const song = await Song.findById(req.params.id);
    
    if (!song) {
      return res.status(404).json({ message: 'Song not found.' });
    }

    song.title = title;
    song.artist = artist;
    song.album = album;
    song.genre = genre;

    await song.save();
    res.json({ message: 'Song updated!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export { getSongs, addSong, getSongById, deleteSongById, updateSongById };
