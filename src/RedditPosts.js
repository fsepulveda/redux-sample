import React, { Component } from 'react';
import RedditPost from './RedditPost';
import _ from 'lodash';

import { connect } from 'react-redux';
import { newPost, loadPosts, updateTitle, savePost } from './redux/actions/posts';
import postsSelector from './redux/selectors/posts';
import AddPost from './AddPost';

class RedditPosts extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(loadPosts());
  }
  render() {
    return (
      <div className="App">
        Current Post: {this.props.currentPostIndex}
        {<AddPost
          editingPost={this.props.editingPost}
          onPostTitleChange={(title) => this.props.dispatch(updateTitle(title))}
          onAdd={() => {
            this.props.dispatch(savePost())
          }}
        />}
        {this.props.isLoading ? <p>Loading...</p> : null}
        {_.map(this.props.posts, redditPost => {
          return <RedditPost
            key={redditPost.title}
            title={redditPost.title}
            userName={redditPost.userName}
            comments={redditPost.comments}
            submitted={redditPost.submitted}
          />
        })}
      </div>
    )
  }
}
export default connect(state => postsSelector(state))(RedditPosts);