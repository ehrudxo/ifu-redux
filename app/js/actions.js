import fetch from 'isomorphic-fetch';

export const MOVE_PAGE = 'MOVE_PAGE';
export const FEEDBCK_POST = 'FEEDBCK_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function movePage(){
  return {type: MOVE_PAGE}
}
function receivePosts(feedback, json) {
  return {
    type: RECEIVE_POSTS,
    feedback : feedback,
    feedbacks : json.feedbacks
  };
}
export function fetchFeedback(feedback){
  return dispatch => {
    return fetch('http://localhost:3500/feedback',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedback)
      })
      .then( response => response.json() )
      .then( json => dispatch(receivePosts(feedback,json)) )
      .then( ()=> dispatch(movePage()))
      .catch( err => console.log(err) );
  }
}
