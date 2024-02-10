import React from 'react';
import SongList from './components/SongList';
import Statistics from './components/Statistics';
import SongForm from './components/SongForm';
// import SongsPage from './pages/SongsPage';
// import StatisticsPage from './pages/StatisticsPage';
// import { useSelector } from 'react-redux';

function App() {

  return (
    <div>
       <SongList />
       <Statistics />
       <SongForm />
       <h1>welcome</h1>
    </div>
  );
}

export default App;