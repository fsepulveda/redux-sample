
import { createSelector } from 'reselect';
import _ from 'lodash';

export default createSelector(
  state => state.posts,
  state => state.users,
  (postsState, usersState) => {
    const users = usersState.users;
    const result = {
      ...postsState,
      posts: _.map(postsState.posts, post => ({ ...post, userName: _.get(users, [post.userId, 'name']) })),
      currentPost: postsState.posts[postsState.currentPostIndex]
    }
    return result;
  }
)
