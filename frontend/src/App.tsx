import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  const songs = useSelector((state: any) => state.songs);
  const statistics = useSelector((state: any) => state.statistics);

  return (
    <div>
      <h1>Welcome to the Music Project</h1>

      <h2>Songs</h2>
      {songs.map((song: any) => (
        <div key={song.id}>{song.title}</div>
      ))}

      <h2>Statistics</h2>
      <ul>
        <li>Total Songs: {statistics.totalSongs}</li>
        <li>Total Artists: {statistics.totalArtists}</li>
        <li>Total Albums: {statistics.totalAlbums}</li>
      </ul>
    </div>
  );
}

export default App;