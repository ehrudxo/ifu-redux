import fetch from 'isomorphic-fetch';

export const ADD_FEEDBACK = 'ADD_FEEDBACK';
function addFeedback(text){
  return {type: ADD_FEEDBACK, text}
}
function fetchFeedback(text){
  return dispatch => {
    dispatch(addFeedback(text));
    return fetch(`http://www.reddit.com/r/${reddit}.json`)
      .then(req => req.json())
      .then(json => dispatch(receivePosts(reddit, json)));
  }
}
