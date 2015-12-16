'use strict'
import React from 'react';
import FeedbackForm from '../components/FeedbackForm';
import {addFeedback} from '../actions'
import FeedbackFormSubmitted from '../components/FeedbackFormSubmitted';

export default class Feedback extends React.Component{
  constructor(){
    super();
    this.token = "RxTxY3cFqwe";
    this.state = {isSubmitted:false};
    this.feedbackRequest ={
      title : '저와 함께한 pair 코딩은 어땠나요?',
      text : '지난 일주일 저와 함께 해 주신 팀원 여러분 일단 감사 드립니다.\n 그동안 저와 함께 했던 pairing 에 대해 허심탄회하게 적어주시면 제가 앞으로 발전하는데 좋은 밑거름이 되도록 노력하겠습니다.'
    }
    this.formSubmit = this.formSubmit.bind(this);
  }
  formSubmit( feedbackText ){
    let urlStr = "http://localhost:3500/feedback";
    $.ajax( {
      type : "POST",
      url: urlStr,
      dataType: "json",
      cache: false,
      data : {
        "text"  : feedbackText,
        "token" : this.token
      },
      success: (data)=> {
        this.setState(Object.assign({isSubmitted : true},data));
      }
    });

  }
  render(){
    if(this.state.isSubmitted){
      return (
        <FeedbackFormSubmitted {...this.state}/>
      )
    }else{
      return (
        <FeedbackForm
        formSubmit={ (text)=>dispatch(addFeedback(text)) }
        feedbackRequest={this.feedbackRequest}/>
      )
    }
  }
}
