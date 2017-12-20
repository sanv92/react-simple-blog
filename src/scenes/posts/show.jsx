import React from 'react'
import PostShowContainer from 'containers/posts/show'


const PostsShow = ({ match }) => (
  <div className="posts-show-layout">
    <div>
      <PostShowContainer {...match} />
    </div>
  </div>
)

export default PostsShow
