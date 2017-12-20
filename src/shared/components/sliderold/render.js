import React, { Component } from 'react'
import slide from './slide'
import { CSSTransition, Transition } from 'react-transition-group'


const defaultStyle = {
  transition: `opacity ${300}ms ease-in-out`,
  opacity: 0,
  width: 300,
  display: 'inline-block',
  backgroundColor: '#8787d8',
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
}

class RenderSlides extends Component {
    currentState = (props) => {
      const id = props.activeSlide

      return props.images.map((item, index) => {
        if (id === index) {
          return slide(item)
        }
      })
    };

    onDuration = (props) => {
      const id = props.activeSlide

      return props.images.map((item, index) => {
        if (id === index && id <= index + 1) {
          return slide(item)
        }
        else if (id === 0 && id === index || index === props.prevSlide) {
          return slide(item)
        }
      })
    };

    render() {
      const props = this.props
      const result = props.show
        ? (<Fade in={!props.show}>
          {this.onDuration(props)}
           </Fade>)
        : this.currentState(props)

      return (
        <ul id="slider">
          {result}
        </ul>
      )
    }
}

const Fade = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={300}>
    {state => (
      <div style={{
                ...defaultStyle,
                ...transitionStyles[state],
            }}
      >
        {children}
      </div>
        )}
  </Transition>
)

export default RenderSlides
