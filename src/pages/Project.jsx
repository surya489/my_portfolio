import React, { useState } from 'react';

import { Stack } from '@mui/material';

import Header from '../components/Header/Header';
import ProjectList from '../components/Project/ProjectList';

const Project = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  return (
    <Stack>
      <Header setHeaderHeight={setHeaderHeight} />
      <ProjectList headerHeight={headerHeight} />
    </Stack>
  )
}

export default Project