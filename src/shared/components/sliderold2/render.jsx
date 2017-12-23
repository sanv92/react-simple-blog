import React from 'react'
import { duration } from './config'


const activeSliderStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
}

const RenderSlides = props => (
  <ul>
    {props.images.map((item, index) => (
      <li key={item.id} className={(props.activeSlide === index ? 'active' : '')} style={activeSliderStyle}>
        <img src={item.image} alt={item.title} />
      </li>
    ))}
  </ul>
)

export default RenderSlides
