import React, { Component } from 'react'


class Navigation extends Component {
  goToPreviousSlide = () => {
    this.props.onLeftButtonClick()
  }

  goToNextSlide = () => {
    this.props.onRightButtonClick()
  }

  render() {
    const { show } = this.props

    return (
      <div>
        {show ? (
          <div className="slider-navigation">
            <button className="slider-navigation-button__left">
              <i className="fa fa-arrow-circle-left fa-3" />
            </button>
            <button className="slider-navigation-button__right">
              <i className="fa fa-arrow-circle-right fa-3" />
            </button>
          </div>
        ) : (
          <div className="slider-navigation">
            <button onClick={() => this.goToPreviousSlide()} className="slider-navigation-button__left">
              <i className="fa fa-arrow-circle-left fa-3" />
            </button>
            <button onClick={() => this.goToNextSlide()} className="slider-navigation-button__right">
              <i className="fa fa-arrow-circle-right fa-3" />
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default Navigation
