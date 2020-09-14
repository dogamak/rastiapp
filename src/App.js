import React from 'react';
import MagicBag from './components/MagicBag'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <div>
      <CssBaseline />
      <Container fixed>
        <Typography align='center'>
          <MagicBag />
        </Typography>
      </Container>
    </div>
  );
}

export default App;
