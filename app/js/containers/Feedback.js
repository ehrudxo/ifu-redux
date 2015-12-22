'use strict'
import React from 'react';
import { connect } from 'react-redux';
import FeedbackForm from '../components/FeedbackForm';
import {fetchFeedback,movePage} from '../actions'
import FeedbackFormSubmitted from '../components/FeedbackFormSubmitted';

class Feedback extends React.Component{
  constructor(){
    super();
    this.token = "RxTxY3cFqwe";
    this.feedbackProposal ={
      title : '저와 함께한 pair 코딩은 어땠나요?',
      text : '지난 일주일 저와 함께 해 주신 팀원 여러분 일단 감사 드립니다.\n 그동안 저와 함께 했던 pairing 에 대해 허심탄회하게 적어주시면 제가 앞으로 발전하는데 좋은 밑거름이 되도록 노력하겠습니다.'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(text){
    const { dispatch } = this.props;
    dispatch(fetchFeedback({
      "text"  : text,
      "token" : this.token
    }));
  }
  render(){
    const { feedback, feedbacks, isFetching,isPageMoved } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div><h3>{this.feedbackProposal.title}</h3></div>
        </div>
        <div className="row">
          {this.feedbackProposal.text}
        </div>
      {!isPageMoved &&
        <FeedbackForm
          formSubmit = {this.handleSubmit}/>
      }
      {isPageMoved &&
        <div><br/>
          <FeedbackFormSubmitted {...feedback}/>
        </div>
      }
      {isFetching && posts.length === 0 &&
                <h2>Loading...</h2>
      }
      </div>
    )
  }
}
function mapStateToProps(state) {
  const {
    isFetching,
    isPageMoved,
    feedback : feedback,
    feedbacks: feedbacks
  } = state || {
    isFetching: true,
    isPageMoved : false,
    feedback : "",
    feedbacks: []
  };

  return {
    feedback,
    feedbacks,
    isFetching,
    isPageMoved
  };
}
export default connect(mapStateToProps)(Feedback);
