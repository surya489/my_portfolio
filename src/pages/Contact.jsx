import React from 'react';
import { Stack } from '@mui/material';

import Header from '../components/Header/Header';
import ContactPage from '../components/contactpage/ContactPage';

const Contact = () => {
  return (
    <Stack>
      <Header />
      <ContactPage />
    </Stack>
  )
}

export default Contact