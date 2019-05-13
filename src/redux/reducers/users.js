import moment from 'moment';

const initialState = {
  users: {
    1: { name: "Jon Doe" }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}