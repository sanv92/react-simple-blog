import React, { Component } from 'react'
import { Field } from 'redux-form'
import { Redirect } from 'react-router-dom'


class PostsCreate extends Component {
  componentWillUnmount() {
    this.props.resetForm()
  }

  renderField = ({ input, label, type, placeholder, meta: { touched, error }}) => (
    <div>
      <div className="form-group">
        <label htmlFor={label}>
          <span className="font-weight-bold">{label}</span>
        </label>
        <input id={label} {...input} type={type} className="form-control" placeholder={placeholder} />
        {touched && ((error && <small className="form-text text-muted">{error}</small>))}
      </div>
      <hr />
    </div>
  );

  renderError = (newPost) => {
    if (newPost && newPost.error) {
      return (
        <div className="alert alert-danger">
          { newPost ? newPost.error : '' }
        </div>
      )
    }
  };

  render() {
    const { handleSubmit, submitting, newPost } = this.props

    // Redirect to post if success and no error
    if (newPost && newPost.post && !newPost.error) {
      return <Redirect to={`/posts/${newPost.post.id}`} />
    }

    return (
      <div>
        {this.renderError(newPost)}

        <form onSubmit={handleSubmit(values => this.props.validateAndCreatePost(values))}>
          <div>
            <Field
              name="title"
              label="Title"
              component={this.renderField}
              type="text"
              placeholder="Title"
            />
          </div>

          <div>
            <Field
              name="categories"
              label="Categories"
              component={this.renderField}
              type="text"
              placeholder="Categories"
            />
          </div>

          <div>
            <Field
              name="content"
              label="Content"
              component={this.renderField}
              type="text"
              placeholder="Content"
            />
          </div>

          {newPost.loading
          ? (
            <button type="subimt" className="btn btn-primary" disabled>
              <i className="fa fa-circle-o-notch fa-spin" />{' '}
              Submit
            </button>
            )
          : <button type="subimt" className="btn btn-primary" disabled={submitting}>Submit</button>}
        </form>
      </div>
    )
  }
}

export default PostsCreate
