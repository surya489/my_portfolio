import React, { useState } from 'react';
import { Stack } from '@mui/material';

import Header from '../components/Header/Header';
import ContactPage from '../components/contactpage/ContactPage';

const Contact = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  return (
    <Stack>
      <Header setHeaderHeight={setHeaderHeight} />
      <ContactPage headerHeight={headerHeight} />
    </Stack>
  )
}

export default Contact