import React from 'react'
import { Link } from 'react-router-dom'
import PostListContainer from 'containers/posts/index'


const PostsIndex = () => (
  <div className="posts-index-layout">
    <h1>Posts</h1>
    <hr />
    <div className="container">
      <div className="row m-b-20 row-no-padding">
        <div className="col">
          <Link to="/posts/create" href="/posts/create" className="btn btn-success float-right">Add New Post</Link>
        </div>
      </div>
      <div className="row row-no-padding">
        <div className="col">
          <PostListContainer />
        </div>
      </div>
    </div>
  </div>
)

export default PostsIndex
