import {SET_USER_NAME} from './UserName-Constants';

const intialState = {
  username: '',
};

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return {...state, username: action.payload};
  }
  return state;
}
