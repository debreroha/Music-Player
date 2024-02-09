import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatistics } from '../services/api';

const Statistics = () => {
  const dispatch = useDispatch();
  const statistics = useSelector((state) => state.statistics);

  useEffect(() => {
    dispatch(fetchStatistics());
  }, [dispatch]);

  return (
    <div>
      <h2>Statistics</h2>
      <p>Total Songs: {statistics.totalSongs}</p>
      <p>Total Artists: {statistics.totalArtists}</p>
      <p>Total Albums: {statistics.totalAlbums}</p>
      <p>Total Genres: {statistics.totalGenres}</p>
    </div>
  );
};

export default Statistics;