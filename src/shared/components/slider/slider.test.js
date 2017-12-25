import React from 'react'
import ReactDOM from 'react-dom'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Slider from './index'


configure({ adapter: new Adapter() })

describe('Slider', () => {
  let slider
  let sliderComponent
  let animation

  const buttonLeft = '.slider-navigation-button__left'
  const buttonRight = '.slider-navigation-button__right'

  beforeEach(() => {
    animation = 'fade'

    slider = (animation) => (
      <Slider animation={animation}>
        <img src="/images/slides/animals.svg" alt="animals" />
        <img src="/images/slides/fish.svg" alt="fish" />
        <img src="/images/slides/landscape.svg" alt="landscape" />
      </Slider>
    )

    sliderComponent = mount(slider())
  })

  describe('on initialization', () => {
    test('will not crash', () => {
      const div = document.createElement('div')
      ReactDOM.render(
        sliderComponent
        , div,
      )
    })

    test('will not crash (empty animation | default: fade)', () => {
      const div = document.createElement('div')
      ReactDOM.render(
        slider('')
        , div,
      )
    })

    test('classes exists', () => {
      expect(sliderComponent.find('.slider').exists()).toEqual(true)
      expect(sliderComponent.find('.slider-navigation').exists()).toEqual(true)
      expect(sliderComponent.find(buttonLeft).exists()).toEqual(true)
      expect(sliderComponent.find(buttonRight).exists()).toEqual(true)
    })

    test('count equal === 3', () => {
      expect(sliderComponent.props().children.length).toEqual(3)
    })

    test('images attributes check', () => {
      const images = sliderComponent.props().children
      const result = [
        {src: '/images/slides/animals.svg', alt: 'animals'},
        {src: '/images/slides/fish.svg', alt: 'fish'},
        {src: '/images/slides/landscape.svg', alt: 'landscape'}
      ]

      images.map((image, index) => {
        expect(image.props.src).toEqual(result[index].src)
        expect(image.props.alt).toEqual(result[index].alt)
      })
    })
  })

  describe('on button click', () => {
    test('button click - left', () => {
      const sliderTest = mount(slider())

      expect(sliderTest.state().slideIndex).toEqual(0)

      sliderTest.find(buttonRight).simulate('click')
      expect(sliderTest.state().slideIndex).toEqual(1)

      sliderTest.find(buttonRight).simulate('click')
      expect(sliderTest.state().slideIndex).toEqual(2)

      sliderTest.find(buttonRight).simulate('click')
      expect(sliderTest.state().slideIndex).toEqual(0)
    })

    test('button click - right', () => {
      const sliderTest = mount(slider())

      expect(sliderTest.state().slideIndex).toEqual(0)

      sliderTest.find(buttonLeft).simulate('click')
      expect(sliderTest.state().slideIndex).toEqual(2)

      sliderTest.find(buttonLeft).simulate('click')
      expect(sliderTest.state().slideIndex).toEqual(1)

      sliderTest.find(buttonLeft).simulate('click')
      expect(sliderTest.state().slideIndex).toEqual(0)
    })
  })
})
