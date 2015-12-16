import fetch from 'isomorphic-fetch';

export const ADD_FEEDBACK = 'ADD_FEEDBACK';
export function addFeedback(feedback){
  return {type: ADD_FEEDBACK, feedback}
}
export function fetchFeedback(feedback){
  return dispatch => {
    console.log(feedback);
    return fetch('http://localhost:3500/feedback',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedback)
      })
      .then( response => response.json() )
      .then( feedback => dispatch(addFeedback(feedback)) )
      .catch( err => console.log(err) );
  }
}
