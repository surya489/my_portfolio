import React from 'react'

import Typewriter from "typewriter-effect";

const Text = () => {
  return (
   <Typewriter 
    options={{
        strings: [
            "React Js Developer",
            "Front End Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
    }}
   />
  )
}

export default Text