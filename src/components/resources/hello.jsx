import React, { useState } from 'react';
import data from './data.json';
import './Resources.css';


export default function Hello () {
    const [wrapperStyle, setWrapperStyle] = useState({
        backgroundImage: `url("${data[0].img}")`,
    });

      return (
          <div className="wrapper" style={wrapperStyle}>
              {console.log(wrapperStyle)}
              hey
          </div>
      )
} 