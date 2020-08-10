import React from 'react'
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return (
      <div className='container' >
            <h4 className='center'>About</h4>
            <p>You can also get the latest release using NPM. 
            This release contains source files as well as the 
            compiled CSS and JavaScript files.</p>
      </div>
    )
  }

export default Rainbow(About)