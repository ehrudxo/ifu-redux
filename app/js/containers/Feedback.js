'use strict'
import React from 'react';
import { connect } from 'react-redux';
import FeedbackForm from '../components/FeedbackForm';
import {fetchFeedback} from '../actions'
import FeedbackFormSubmitted from '../components/FeedbackFormSubmitted';

class Feedback extends React.Component{
  constructor(){
    super();
    this.token = "RxTxY3cFqwe";
    this.state = {isSubmitted:false};
    this.feedbackRequest ={
      title : '저와 함께한 pair 코딩은 어땠나요?',
      text : '지난 일주일 저와 함께 해 주신 팀원 여러분 일단 감사 드립니다.\n 그동안 저와 함께 했던 pairing 에 대해 허심탄회하게 적어주시면 제가 앞으로 발전하는데 좋은 밑거름이 되도록 노력하겠습니다.'
    }
  }
  render(){
    const {dispatch} = this.props;
    if(this.state.isSubmitted){
      return (
        <FeedbackFormSubmitted {...this.state}/>
      )
    }else{
      return (
        <FeedbackForm
          formSubmit={(text)=>dispatch(fetchFeedback({
            "text"  : text,
            "token" : this.token
          }))}
          feedbackRequest={this.feedbackRequest}/>
      )
    }
  }
}

export default connect()(Feedback);
