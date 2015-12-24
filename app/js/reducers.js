import {FEEDBCK_POST,RECEIVE_POSTS,MOVE_PAGE} from './actions';

export default function feedbacks(state = {
  isFetching: false,
  feedback : "",
  feedbacks: []
}, action) {
  switch (action.type) {
    case FEEDBCK_POST:
      return Object.assign({}, state, {
        isFetching: true,
        feedback : action.feedback
      });
    case RECEIVE_POSTS:
      return Object.assign({},state,{
        isFetching: false,
        feedback : action.feedback,
        feedbacks : action.feedbacks
      })
    default:
    return state;
  }
}
