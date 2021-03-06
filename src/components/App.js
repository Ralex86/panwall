import React from 'react';
import styled from '@emotion/styled';

function App() {
  return (
    <AppRoot>
      <span>Hello there</span>
    </AppRoot>
  );
}

const AppRoot = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default App;
