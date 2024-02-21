import React from 'react';
import styled from '@emotion/styled';
import GetSong from './components/GetSong';
import AddSong from './components/AddSong';

const Container = styled.div`
  display: flex;
  padding-top: 10px;
  margin-left:200px;
  margin-right:200px;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid black;
  // width: 50px;
  height: 100vh;
`;

const App = () => {
  return (
    <Container>
      <GetSong />
      <br />
      <AddSong />
    </Container>
  );
};

export default App;