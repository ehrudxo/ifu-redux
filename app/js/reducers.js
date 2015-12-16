import {FEEDBCK_POST,RECEIVE_POSTS,MOVE_PAGE} from './actions';

function feedbacks(state ={
  isFetching: false,
  didInvalidate: false,
  items: []
}, action){
  switch (action.type) {
    case MOVE_PAGE:
      return Object.assign({},state,didInvalidate:true);
    case FEEDBCK_POST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_POSTS:
      return Object.assign({},state,{
        isFetching: false,
        didInvalidate: false,
        items : action.feedbacks
      })
    default:
      return state;
  }
}

export default function feedbacksByServer(state = { }, action) {
  switch (action.type) {
  case MOVE_PAGE:
  case RECEIVE_POSTS:
  case FEEDBCK_POST:
    return Object.assign({}, state, {
      [action.reddit]: posts(state[action.reddit], action)
    });
  default:
    return state;
  }
}
