import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatisticsAsync } from '../redux/statisticsActions';

const StatisticsPage = () => {
  const dispatch = useDispatch();
  const statistics = useSelector((state) => state.statistics);

  useEffect(() => {
    dispatch(fetchStatisticsAsync());
  }, [dispatch]);

  return (
    <div>
      <h1>Statistics</h1>
      <ul>
        <li>Total Songs: {statistics.totalSongs}</li>
        <li>Total Artists: {statistics.totalArtists}</li>
        <li>Total Albums: {statistics.totalAlbums}</li>
        {/* Add other statistics properties here */}
      </ul>
    </div>
  );
};

export default StatisticsPage;