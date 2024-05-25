import asyncHandler from "../middleware/asyncHandler.js";
import Song from '../models/song.js';

// get statistics
const getStatistics = asyncHandler(async (req, res) => {
  try {
    const totalSongs = await Song.countDocuments();

    const totalArtists = await Song.distinct('artist').exec();
    const totalAlbums = await Song.distinct('album').exec();
    
    const distinctGenres = await Song.distinct('genre').exec();
    const totalGenres = distinctGenres.length;

    const genreCounts = await Song.aggregate([
      { $group: { _id: '$genre', count: { $sum: 1 } } },
    ]);
    // count artists
    const artistCounts = await Song.aggregate([
      { $group: { _id: '$artist', count: { $sum: 1 } } },
      { $match: { _id: { $ne: null } } },
    ]);
    // count albums
    const albumCounts = await Song.aggregate([
      { $group: { _id: '$album', count: { $sum: 1 } } },
      { $match: { _id: { $ne: null } } },
    ]);

    res.json({
      totalSongs,
      totalArtists: totalArtists.length,
      totalAlbums: totalAlbums.length,
      totalGenres,
      genreCounts,
      artistCounts,
      albumCounts,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve statistics' });
  }
});

// export component 
export {getStatistics}
