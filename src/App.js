import './App.css';
import { Stack } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Home, Contact, Project, About } from './pages/index';
import Preloader from '../src/components/Pre';

const App = () => {

  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);



  return (
    <Stack style={{ height: "100%" }}>
      <Stack id={load ? "no-scroll" : "scroll"} style={{ height: "100%" }}>
        <Router>
          <Preloader load={load} />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/project' element={<Project />}></Route>
          </Routes>
        </Router>
      </Stack>
    </Stack>

  )
}

export default App;