import React from 'react';
import styled from '@emotion/styled';
import GetSong from './components/GetSong';
import AddSong from './components/AddSong';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 20px;
  background-color: #f2f2f2;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  width: fit-content;
`;

const App = () => {
  return (
    <Container>
      <GetSong />
      <AddSong />
    </Container>
  );
};

export default App;