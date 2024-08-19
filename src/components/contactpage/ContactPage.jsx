import React from 'react';
import '../../pages/style.css';
import { Container } from 'react-bootstrap';
import { Stack } from '@mui/material';

const ContactPage = () => {
  return (
    <Stack className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Get In Touch</h2>
        <p className='contactpara'> I’m currently searching for opportunities for a front-end developer role. <br /> If there is any vacancy my inbox is always open. Whether <br /> you have any further questions or just want to say hi, <br /> I’ll try my best to get back to you!</p>
        <button
          className='contactbtn'
          onClick={() => {
            window.open("https://wa.me/+916380489800");
          }}
        >Say Hello</button>
        <span></span>
        <hr className='line' />
        <p className='copyright'>© Copyright {new Date().getFullYear()}.
          <br />
          Designed & Built by <span>jayasurya</span></p>
      </Container>
    </Stack>
  )
}

export default ContactPage