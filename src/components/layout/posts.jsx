import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PostsIndex from 'scenes/posts/list'
import PostsShow from 'scenes/posts/show'
import PostsCreate from 'scenes/posts/create'


const PostSubLayout = () => (
  <div className="posts-layout">
    <Switch>
      <Route path="/posts" exact component={PostsIndex} />
      <Route path="/posts/create" component={PostsCreate} />
      <Route path="/posts/:postId" render={props => <PostsShow {...props} />} />
    </Switch>
  </div>
)

export default PostSubLayout
