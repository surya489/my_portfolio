import React, { useState } from 'react';

import { Stack } from '@mui/material';

import Header from '../components/Header/Header';
import HomePage from '../components/HomePage/HomePage';

const Home = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  return (
    <Stack>
      <Header setHeaderHeight={setHeaderHeight} />
      <HomePage headerHeight={headerHeight} />
    </Stack>
  )
}

export default Home;