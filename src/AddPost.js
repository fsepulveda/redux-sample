import React, { Component } from 'react'

class AddPost extends Component {
  render() {
    return (
      <div>
        <p>Title</p>
        <input value={this.props.editingPost.title} onChange={event => this.props.onPostTitleChange(event.target.value)}></input>
        <button onClick={() => this.props.onAdd()}>Add</button>
      </div>
    )
  }
}
export default AddPost;