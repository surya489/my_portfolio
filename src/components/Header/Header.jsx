import React, { useState } from 'react';

import { Button } from '@mui/material';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

import Resume from '../../assets/jaya_surya_resume.pdf';

import '../../pages/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Navbar.Brand className='logotext' as={Link} to='/'>
        <span className='logo'>
          Jaya Surya
        </span>
      </Navbar.Brand>
      <Navbar.Toggle
        className='navbar-toggler' aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle >
      <Navbar.Collapse id="responsive-navbar-nav" className='responsive-navbar justify-content-end'>
        <Nav defaultActiveKey="#home">
          <Nav.Item>
            <Nav.Link as={Link} onClick={() => updateExpanded(false)} to='/' >Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} onClick={() => updateExpanded(false)} to='/about' >About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} onClick={() => updateExpanded(false)} to='/contact' >Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} onClick={() => updateExpanded(false)} to='/project' >Project</Nav.Link>
          </Nav.Item>
          <Button
            onClick={() => {
              window.open(Resume);
            }}
            className='resumebtn'><span>Resume</span>
          </Button>

        </Nav>
      </Navbar.Collapse>

    </Navbar>

  )
}

export default Header;