import React, { Component } from 'react'
import RenderSlides from './render'


const duration = 300

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
        {id: 1, image: '/dist/images/slides/animals.svg'},
        {id: 2, image: '/dist/images/slides/fish.svg'},
        {id: 3, image: '/dist/images/slides/landscape.svg'},
        {id: 4, image: '/dist/images/slides/witch.svg'},
      ],
      activeSlide: 0,
      prevSlide: 0,
      show: false,
    })
  }

    goToPreviousSlide = () => {
      this.setState({
        activeSlide: (this.state.activeSlide === 0) && this.state.images.length - 1 || this.state.activeSlide - 1,
        prevSlide: this.state.activeSlide,
        show: !this.state.show,
      })
      setTimeout(this.timer, duration)
    };

    goToNextSlide = () => {
      this.setState({
        activeSlide: (this.state.activeSlide + 1) % this.state.images.length,
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
        <div>
          <div>
            <RenderSlides {...this.state} />
            {this.state.show ? (
              <div>
                <button>Left</button>
                <button>Right</button>
              </div>
                    ) : (
                      <div>
                        <button onClick={() => this.goToPreviousSlide()}>Left</button>
                        <button onClick={() => this.goToNextSlide()}>Right</button>
                      </div>
                    )}
          </div>
        </div>
      )
    }
}

export default Slider
