import React, { Component } from 'react'
import { TransitionGroup } from 'react-transition-group'
import { Fade } from './css-transation'
import Navigation from './navigation'
import './slider.scss'


class SliderContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      slideIndex: 0,
      duration: false,
      components: {
        fade: Fade,
      },
    }
  }

  onTransitionEntered = () => {
    Promise
      .resolve()
      .then(() => this.setState({
        duration: true,
      }))
  }

  onTransitionExited = () => {
    Promise
      .resolve()
      .then(() => this.setState({
        duration: false,
      }))
  }

  goToPreviousSlide = () => {
    const counter = this.state.slideIndex - 1
    const slideIndex = counter < 0
      ? this.props.children.length - 1
      : counter

    this.setState({
      slideIndex,
    })
  }

  goToNextSlide = () => {
    const counter = this.state.slideIndex + 1
    const slideIndex = counter < this.props.children.length
      ? counter
      : 0

    this.setState({
      slideIndex,
    })
  }

  renderSlide = (slide) => {
    const AnimationTag = this.state.components[this.props.animation || 'fade']

    return (
      <AnimationTag
        key={slide.alt}
        onEnter={this.onTransitionEntered}
        onExited={this.onTransitionExited}
      >
        <li>
          <img src={slide.src} alt={slide.alt} />
        </li>
      </AnimationTag>
    )
  }

  render() {
    const image = this.props.children[this.state.slideIndex].props

    return (
      <div className="slider">
        <ul>
          <TransitionGroup>
            {this.renderSlide(image)}
          </TransitionGroup>
        </ul>
        <Navigation
          onLeftButtonClick={this.goToPreviousSlide}
          onRightButtonClick={this.goToNextSlide}
          {...this.state}
        />
      </div>
    )
  }
}

export default SliderContainer
