import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="fade"
  >
    {children}
  </CSSTransition>
)

class Slider extends Component {
  renderSlide = slide => (
    slide.map(item => (
      <Fade
        key={item.id}
        onEnter={this.props.onFadeTransitionEntered}
        onExited={this.props.onFadeTransitionExited}
      >
        <li>
          <img src={item.image} alt={item.title} />
        </li>
      </Fade>
    ))
  )

  render() {
    return (
      <ul>
        <TransitionGroup>
          {this.renderSlide(this.props.children)}
        </TransitionGroup>
      </ul>
    )
  }
}

export default Slider
