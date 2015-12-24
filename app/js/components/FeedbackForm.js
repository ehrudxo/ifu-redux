import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import {fetchFeedback} from '../actions'

class FeedbackForm extends React.Component{
  constructor(props){
    super(props);
    this.token = "RxTxY3cFqwe";
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  returnFalse (){return false;}
  handleSubmit(e){
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(fetchFeedback({
      "text"  : this.refs.feedbackText.value,
      "token" : this.token
    }));

  }
  render(){
    return(
        <div className="row">
          <form onSubmit={this.returnFalse}>
            <textarea ref="feedbackText"  className="form-control" rows="3"/>
            <br/>
            <a className="btn btn-primary btn-lg btn-block"
                  to="/w/submitted"
                  onClick={this.handleSubmit}>응답하기</a>
          </form>
        </div>
    )
  }
}

export default connect()(FeedbackForm);
