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
    const { artist, songs } = req.body;

    // If songs is an array, add each song to the database
    if (Array.isArray(songs)) {
      const newSongs = songs.map(song => ({ ...song, artist }));
      await Song.insertMany(newSongs);
      res.json({ message: 'Songs added!' });
    } else {
      // If songs is not an array, treat it as a single song
      const { title, album, genre } = req.body;
      const newSong = new Song({ title, artist, album, genre });
      await newSong.save();
      res.json({ message: 'Song added!' });
    }
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

    // Use findByIdAndUpdate to find and update the existing song
    const updatedSong = await Song.findByIdAndUpdate(
      req.params.id,
      { title, artist, album, genre },
      { new: true }
    );

    // Check if the song was not found
    if (!updatedSong) {
      return res.status(404).json({ message: 'Song not found.' });
    }

    res.json({ message: 'Song updated!', song: updatedSong });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});



// Get songs by title
// GET /api/songs/title/:title
const getSongsByTitle = asyncHandler(async (req, res) => {
  try {
    const { title } = req.params;
    const songs = await Song.find({ title });
    res.json(songs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get songs by artist
// GET /api/songs/artist/:artist
const getSongsByArtist = asyncHandler(async (req, res) => {
  try {
    const { artist } = req.params;
    const songs = await Song.find({ artist });
    res.json(songs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get songs by album
// GET /api/songs/album/:album
const getSongsByAlbum = asyncHandler(async (req, res) => {
  try {
    const { album } = req.params;
    const songs = await Song.find({ album });
    res.json(songs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get songs by genre
// GET /api/songs/genre/:genre
const getSongsByGenre = asyncHandler(async (req, res) => {
  try {
    const { genre } = req.params;
    const songs = await Song.find({ genre });
    res.json(songs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


export { getSongs, addSong, getSongById, 
  deleteSongById, updateSongById, 
  getSongsByAlbum, getSongsByTitle, 
  getSongsByArtist, getSongsByGenre, };
