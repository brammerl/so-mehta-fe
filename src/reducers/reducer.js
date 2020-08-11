import { SET_ARTWORK } from '../actions/reducerActions';

export const initialState = {
  artwork: [],
  loading: true
}

export default function reducer(state, action) {
  switch(action.type) {
    case SET_ARTWORK: 
      return {...state, artwork: action.payload};
  }
}