import React, { useState } from 'react';
import { Stack } from '@mui/material';
import Header from '../components/Header/Header';
import AboutPage from '../components/About/AboutPage';

const About = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <Stack style={{ height: "100%" }}>
      <Header setHeaderHeight={setHeaderHeight} />
      <AboutPage headerHeight={headerHeight} />
    </Stack>
  );
}

export default About;