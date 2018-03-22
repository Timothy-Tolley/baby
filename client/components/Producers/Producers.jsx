import React from 'react'
import {connect} from 'react-redux'

import './producers.css'
import DetachedHead from '../DetachedHead/DetachedHead'

class Producers extends React.Component {
  render () {
    return (
      <div className = 'producers-container'>
        <DetachedHead />
        <h2 className = 'producer-header'> - Producer Biographies - </h2>
        <div className = 'producers-row'>
          <div className = 'producer-text'>
            <img src = '/images/ruby.png' className = 'producer-image'/>
            <h2 className = 'producer-name'> Ruby Reihana-Wilson </h2>
            <br/>
            <p>
            Ruby is a film producer, musician and lighting technician for live theatre production. She produced her first feature film Talk: A Portmanteau in 2013 which won Best Visual Arts at the Auckland Fringe Festival. Recent freelance projects include production managing, casting and first assistant directing In Pursuit of Venus by Lisa Reihana, which exhibited at the 2018 Venice Biennale. She has just finished post-production for her Loading Docs documentary Asian Men Talk About Sex, while producing full time for Monster Valley, a creative film studio.
            </p>
          </div>
          <div className = 'producer-text'>
            <img src = '/images/marion.png' className = 'producer-image'/>
            <h2 className = 'producer-name'> Marion Prebble </h2>
            <br/>
            <p>
              {'Marion has worked as an actress, writer and producer in New Zealand andthe UK. Her credits include award-winning The Pantry Shelf, performed in Edinburgh, London and Auckland. Other recent screen roles include short film Mine which screened at NZIFF in 2015. She’s been a regular performer in the dance comedy troupe Dynamotion, and is represented by Auckland Actors. She has worked as a theatre producer for Massive Company and as Producer in Residence at Basement Theatre. She has co-written as part of Team M&M several plays and numerous short films for the internet.'}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Producers)
