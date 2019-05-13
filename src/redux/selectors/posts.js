
import { createSelector } from 'reselect'

export default createSelector(
  state => state.posts,
  (postsState) => {
    const result = {
      ...postsState,
      currentPost: postsState.posts[postsState.currentPostIndex]
    }
    return result;
  }
)
