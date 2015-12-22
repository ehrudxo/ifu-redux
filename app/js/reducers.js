import {FEEDBCK_POST,RECEIVE_POSTS,MOVE_PAGE} from './actions';

function feedbacks(state ={
  isFetching: false,
  didInvalidate: false,
  isPageMoved :false,
  feedbacks: []
}, action){
  // console.log("reducers.feedbacks",action);
  switch (action.type) {
    case MOVE_PAGE:
      return Object.assign({},state,{didInvalidate:true,isPageMoved:true});
    case FEEDBCK_POST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_POSTS:
      return Object.assign({},state,{
        isFetching: false,
        didInvalidate: false,
        isPageMoved :true,
        feedback : action.feedback,
        feedbacks : action.feedbacks
      })
    default:
      return state;
  }
}

export default function feedbacksByServer(state = { }, action) {
  // console.log("reducers.feedbacksByServer",action);
  switch (action.type) {
  case MOVE_PAGE:
  case RECEIVE_POSTS:
  case FEEDBCK_POST:
    return Object.assign({}, state, feedbacks(state,action));
  default:
    return state;
  }
}
