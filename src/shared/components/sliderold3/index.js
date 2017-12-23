import React, { Component } from 'react'
import Slider from './slider.jsx'
import Navigation from './navigation.jsx'
import './slider.scss'


class SliderContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      //activeSlide: 0,
      //prevSlide: 0,
      show: false,
    }
  }

  componentWillMount() {
    this.setState({
      images: [
        {id: 1, image: '/dist/images/slides/animals.svg', title: 'animals'},
        {id: 2, image: '/dist/images/slides/fish.svg', title: 'fish'},
        {id: 3, image: '/dist/images/slides/landscape.svg', title: 'landscape'},
        {id: 4, image: '/dist/images/slides/witch.svg', title: 'witch'},
      ],
    })
  }

  onFadeEntered = () => {
    Promise
      .resolve()
      .then(() => this.setState({
        show: true,
      }))
  }

  onFadeExited = () => {
    Promise
      .resolve()
      .then(() => this.setState({
        show: false,
      }))
  }

//  const next = () => ++i > 3 ? list[i] : list[1]
//  const previous = () => —i < 1 ? list[i] : list[3]

  goToPreviousSlide = () => {
    const activeSlide = this.state.activeSlide - 1 < 0
      ? this.state.images.length - 1
      : this.state.activeSlide - 1

    this.setState({
      activeSlide,
      prevSlide: this.state.activeSlide,
    })
  }

  goToNextSlide = () => {
    const activeSlide = this.state.activeSlide + 1 < this.state.images.length
      ? this.state.activeSlide + 1
      : 0

    this.setState({
      activeSlide,
      prevSlide: this.state.activeSlide,
    })
  }

  render() {
    const image = this.state.images.filter((item, index) => (
      this.state.activeSlide === index
    ))

    return (
      <div id="slider">
        <Slider
          onFadeTransitionEntered={this.onFadeEntered}
          onFadeTransitionExited={this.onFadeExited}
        >
          {image}
        </Slider>
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
