import React from 'react'

import './about.css'

class About extends React.Component {
  render () {
    return (
      <div className = 'about-container'>
        <div className = 'about-content-cont'>

        </div>
        <div className = 'about-content-cont'>
          <h2 className = 'synopsis-header'> SYNOPSIS </h2>
          <p className = 'synopsis-text'>
            {"Isabelle is determined not to spend her 65th birthday alone. When her daughter doesn't turn up for dinner, Isabelle invites herself into the home of her new neighbour, Leisha."}

          </p>
          <p className = 'synopsis-text'>
            {'Once inside and eating cake, Isabelle soon discovers that this young woman has recently lost her baby to cot death.'}
          </p>
          <p className = 'synopsis-text'>
            {"When Isabelle's prying triggers a nervous breakdown in Leisha, she helps her in a way nobody else can."}
          </p>
        </div>
      </div>
    )
  }
}

export default About
