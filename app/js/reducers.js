import {ADD_FEEDBACK} from './actions';

export default feedbacks = function(state =[], action){
  switch (action.type) {
    case ADD_FEEDBACK:
      return [...state,{
              text : action.text
            }];
    default:
      return state;
  }
}
