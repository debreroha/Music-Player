import express from 'express';
import Song from '../models/song.js';

const router = express.Router();

// Get overall statistics
router.get('/', async (req, res) => {
  try {
    const totalSongs = await Song.countDocuments();
    const totalArtists = await Song.distinct('artist').countDocuments();
    const totalAlbums = await Song.distinct('album').countDocuments();
    const totalGenres = await Song.distinct('genre').countDocuments();

    const genreCounts = await Song.aggregate([
      { $group: { _id: '$genre', 
      count: { $sum: 1 } } },
    ]);

    const artistCounts = await Song.aggregate([
      { $group: { _id: '$artist', 
      count: { $sum: 1 } } },
    ]);

    const albumCounts = await Song.aggregate([
      { $group: { _id: '$album', 
      count: { $sum: 1 } } },
    ]);

    res.json({
      totalSongs,
      totalArtists,
      totalAlbums,
      totalGenres,
      genreCounts,
      artistCounts,
      albumCounts,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve statistics' });
  }
});

export default router;