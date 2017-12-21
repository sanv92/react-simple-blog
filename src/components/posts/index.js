import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoadingSpinner from 'shared/components/loading/spinner'


class PostsList extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }

  renderPosts = posts => (
    posts.map(value => (
      <li key={value.id}>
        <Link to={`/posts/${value.id}`} href={`/posts/${value.id}`} className="list-group-item list-group-item-action m-b-5">{value.title}</Link>
      </li>
    ))
  );

  render() {
    const { posts, loading } = this.props

    if (loading) {
      return <LoadingSpinner />
    }
    else if (!posts) {
      return <span />
    }

    return (
      <ul className="list-group">
        {this.renderPosts(posts)}
      </ul>
    )
  }
}

export default PostsList
