import fetch from 'isomorphic-fetch';
import { pushPath } from 'redux-simple-router'
import {Link} from 'react-router';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const MOVE_PAGE = 'MOVE_PAGE';
function movePage(){
  console.log("movePage!");
  window.location.href="/#/w/submitted";
}
function receivePosts(feedback, json) {
  return {
    type: RECEIVE_POSTS,
    feedback : feedback,
    feedbacks : json.feedbacks
  };
}
export function fetchFeedback(feedback){
  return (dispatch,getState) => {
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
      .then( ()=> dispatch(movePage))
      .catch( err => console.log(err) );
  }
}
