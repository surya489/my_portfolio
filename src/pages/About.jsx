import React from 'react';
import { Stack } from '@mui/material';

import Header from '../components/Header/Header';


import AboutPage from '../components/About/AboutPage';

const About = () => {
  return (
    <Stack>
      <Header />
      <AboutPage />
    </Stack>
  )
}

export default About