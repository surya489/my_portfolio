import React from 'react';

import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Stack } from '@mui/material';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa"

import Text from './Text';

const HomePage = ({ headerHeight }) => {
  return (
    <Stack className='homepagebackground'>
      <Container>
        <Row style={{ paddingTop: headerHeight + 10 }}>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>I'm Jaya Surya</h2>
            <span></span>
            <Text />
            <button
              onClick={() => {
                window.open("https://github.com/surya489");
              }} className='socailmediabtn'>

              <AiFillGithub className='icon' />

            </button>

            <button
              onClick={() => {
                window.open("https://www.linkedin.com/in/jayasurya4899/");
              }}
              className='socailmediabtn'>
              <FaLinkedinIn className='icon' />
            </button>

            <button
              onClick={() => {
                window.open("https://twitter.com/jayaSur70073368");
              }} className='socailmediabtn'>

              <AiOutlineTwitter className='icon' />

            </button>

            <button
              onClick={() => {
                window.open("https://www.instagram.com/jaya_surya_489/");
              }} className='socailmediabtn'>

              <AiFillInstagram className='icon' />

            </button>

          </Col>
          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </Stack>
  )
}

export default HomePage;