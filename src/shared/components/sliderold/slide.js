import React, { Component } from 'react'


const slide = item => (
  <li key={item.id}>
    <img src={item.image} />
  </li>
)

export default slide
