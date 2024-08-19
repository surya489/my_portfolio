import React from 'react';

import { Stack } from '@mui/material';

import Header from '../components/Header/Header';
import ProjectList from '../components/Project/ProjectList';

const Project = () => {
  return (
    <Stack>
      <Header />
      <ProjectList />
    </Stack>
  )
}

export default Project