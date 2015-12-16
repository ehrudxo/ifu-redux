import {ADD_FEEDBACK} from './actions';

export default function feedbacks(state =[], action){
  switch (action.type) {
    case ADD_FEEDBACK:
      return [...state,{
              feedback : action.feedback
            }];
    default:
      return state;
  }
}
