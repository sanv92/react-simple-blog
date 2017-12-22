import React, { Component } from 'react'
import RenderSlides from './render.jsx'
import Navigation from './navigation.jsx'
import { duration } from './config'
import './slider.scss'


class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      activeSlide: 0,
      prevSlide: 0,
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
      activeSlide: 0,
      prevSlide: 0,
      show: false,
    })
  }

    goToPreviousSlide = () => {
      this.setState({
        activeSlide: this.state.activeSlide - 1 < 0
          ? this.state.images.length - 1
          : this.state.activeSlide - 1,
        prevSlide: this.state.activeSlide,
        show: !this.state.show,
      })
      setTimeout(this.timer, duration)
    };

    goToNextSlide = () => {
      this.setState({
        activeSlide: this.state.activeSlide + 1 < this.state.images.length
          ? this.state.activeSlide + 1
          : 0,
        prevSlide: this.state.activeSlide,
        show: !this.state.show,
      })
      setTimeout(this.timer, duration)
    };

    timer = () => {
      this.setState({ show: !this.state.show })
    };

    render() {
      return (
        <div id="slider">
          <RenderSlides {...this.state} />
          <Navigation
            onLeftButtonClick={() => this.goToPreviousSlide()}
            onRightButtonClick={() => this.goToNextSlide()}
            {...this.state}
          />
        </div>
      )
    }
}

export default Slider
