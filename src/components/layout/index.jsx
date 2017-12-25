import React from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'

import PostSubLayout from 'components/layout/posts'

import HomePage from 'scenes/home'
import NotFoundPage from 'scenes/not-found'

import Slider from 'shared/components/slider'


const PrimaryLayout = () => (
  <div>
    <div className="wrapper">
      <header role="banner" className="m-b-20">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" role="navigation">
          <Link className="navbar-brand" to="/" href="/" >Navbar</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" href="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/posts" href="/posts" className="nav-link">Posts</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/posts" component={PostSubLayout} />
              <Route path="/not-found" component={NotFoundPage} />
              <Redirect to="/not-found" />
            </Switch>
          </div>
          <aside className="col-12 col-sm-4" role="complementary">
            <Slider animation="fade">
              <img src="/images/slides/animals.svg" alt="animals" />
              <img src="/images/slides/fish.svg" alt="fish" />
              <img src="/images/slides/landscape.svg" alt="landscape" />
              <img src="/images/slides/witch.svg" alt="witch" />
            </Slider>
            <Slider animation="fade">
              <img src="/images/slides/fish.svg" alt="fish" />
              <img src="/images/slides/landscape.svg" alt="landscape" />
              <img src="/images/slides/witch.svg" alt="witch" />
              <img src="/images/slides/animals.svg" alt="animals" />
            </Slider>
            <Slider animation="fade">
              <img src="/images/slides/landscape.svg" alt="landscape" />
              <img src="/images/slides/witch.svg" alt="witch" />
              <img src="/images/slides/animals.svg" alt="animals" />
              <img src="/images/slides/fish.svg" alt="fish" />
            </Slider>
          </aside>
        </div>
      </div>
    </div>

    <footer className="footer" role="contentinfo">
      <div className="container text-center">
        <span className="text-muted">Footer content</span>
      </div>
    </footer>
  </div>
)

export default PrimaryLayout
