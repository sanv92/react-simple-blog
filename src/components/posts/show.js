import React, { Component } from 'react'
import { fetchPost, resetActivePost } from 'actions/posts-action'
import LoadingSpinner from 'shared/components/loading/spinner'


class PostShow extends Component {
  componentWillMount() {
    const { postId } = this.props.params

    this.props.fetchPost(parseInt(postId, 10))
  }

  componentWillUnmount() {
    this.props.resetPost()
  }

  render() {
    const { post, loading } = this.props

    if (loading) {
      return <LoadingSpinner />
    }
    else if (!post) {
      return <span />
    }

    const { title, categories, content } = post

    return (
      <div>
        <h1>{title}</h1>
        <dl>
          <dt className="font-weight-bold">Categories:</dt>
          <dd>{categories}</dd>
        </dl>
        <section role="main">
          <article>
            {content}
          </article>
        </section>
      </div>
    )
  }
}

export default PostShow
