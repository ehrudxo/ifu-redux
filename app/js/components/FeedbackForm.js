import React from 'react';
import ReactDOM from 'react-dom';

export default class FeedbackForm extends React.Component{
  returnFalse (){return false;}
  render(){
    return(
      <div className="container">
        <div className="row">
          <div><h3>{this.props.feedbackRequest.title}</h3></div>
        </div>
        <div className="row">
          {this.props.feedbackRequest.text}
        </div>
        <div className="row">
          <form onSubmit={this.returnFalse}>
            <textarea name="feedbackText"  className="form-control" rows="3"/>
            <br/>
            <button className="btn btn-primary btn-lg btn-block" onClick={(e)=>{
              e.preventDefault();
              var form = e.target.form;
              var feedbackText = form.querySelector('[name="feedbackText"]').value;
              this.props.formSubmit(feedbackText);
              return false;
            }}>응답하기</button>
          </form>
        </div>
      </div>
    )
  }
}
