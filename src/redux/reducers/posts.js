import moment from "moment";

const initialState = {
  posts: {},
  isLoading: false,
  editingPost: { title: '', userId: 1, comments: 5, submitted: false, creationDate: moment().format() },
  currentPostIndex: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'posts/SAVE_POST':
      return { ...state, editingPost: initialState.editingPost }
    case 'posts/UPDATE_TITLE':
      return { ...state, editingPost: { ...state.editingPost, title: action.payload } }
    case 'posts/LOAD_POSTS_REQUEST':
      return { ...state, isLoading: true }
    case 'posts/LOAD_POSTS_SUCCESS':
      return { ...state, posts: action.payload, isLoading: false }
    default:
      return state
  }
}

