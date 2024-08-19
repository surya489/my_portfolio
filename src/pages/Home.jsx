import React from 'react';

import { Stack } from '@mui/material';

import Header from '../components/Header/Header';
import HomePage from '../components/HomePage/HomePage';

const Home = () => {
  return (
    <Stack>
        <Header />
        <HomePage />
    </Stack>
  )
}

export default Home;