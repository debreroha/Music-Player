import asyncHandler from "../middleware/asyncHandler.js";
import Song from '../models/song.js'

// list or access all songs
// fetch a songs
// GET /api/songs/
const getSongs = asyncHandler(async (req, res) => {
    Song.find()
    .then(songs => res.json(songs))
    .catch(err => res.status(400).json('Error: ' + err));
})

// add a songs
// POST /api/songs/add
const addSong = asyncHandler(async(req, res) => {
    const title = req.body.title;
    const artist = req.body.artist;
    const album = req.body.album;
    const genre = req.body.genre;
  
    const newSong = new Song({title, artist, album, genre});
  
    newSong.save()
      .then(() => res.json('Song added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  })

// fetch songs by id
// GET /api/songs/:id
const getSongById = asyncHandler( async (req, res) => {
    Song.findById(req.params.id)
      .then(song => res.json(song))
      .catch(err => res.status(400).json('Error: ' + err));
  })

// delete songs by id
// DELETE /api/songs/:id
const deleteSongById = asyncHandler(async (req, res) => {
    Song.findByIdAndDelete(req.params.id)
      .then(() => res.json('Song deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  })

// update songs by id
// PUT /api/songs/update/:id
const updateSongById = asyncHandler(async (req, res) => {
    Song.findById(req.params.id)
      .then(song => {
        song.title = req.body.title;
        song.artist = req.body.artist;
        song.album = req.body.album;
        song.genre = req.body.genre;

        song.save()
          .then(() => res.json('Song updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  })

export {getSongs,addSong, getSongById, deleteSongById, updateSongById}
