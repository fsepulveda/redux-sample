import _ from 'lodash';
import firebase from './../../firebase';

export const newPost = () => (dispatch, getState) => {
  console.log(getState());
  console.log('todo');
  console.log('more todo');
  _.delay(() => {
    console.log('do stuff after delay');
    dispatch({ type: 'posts/NEW_POST', payload: 'post 2' });
    dispatch({ type: 'posts/NEW_POST', payload: 'post 3' });
  }, 2000);
}

export const savePost = () => (dispatch, getState) => {
  const newPost = getState().posts.editingPost;
  firebase.database().ref('posts').push(newPost);
  dispatch({ type: 'posts/SAVE_POST' })
}

export const loadPosts = () => (dispatch, getState) => {
  dispatch({ type: 'posts/LOAD_POSTS_REQUEST' })
  firebase.database().ref('posts').on('value', snapshot => {
    dispatch({ type: 'posts/LOAD_POSTS_SUCCESS', payload: snapshot.val() })
  });
}

export const updateTitle = (title) => {
  return { type: 'posts/UPDATE_TITLE', payload: title }
}