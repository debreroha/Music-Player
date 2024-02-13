import React, { useEffect } from 'react'
import { getSongsFetch, rootState } from '../songState/songsState';
import { useDispatch, useSelector } from 'react-redux';

const GetSong:React.FC= () => {
  const dispatch = useDispatch();
  const songs = useSelector((state: rootState) => state.songs.songs);


  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);
  return (
    <div>
      <h1>
        {songs?.map((item, index) => (
          <li key={index}>{item.artist}</li>
        ))}
      </h1>
    </div>
  )
}

export default GetSong
