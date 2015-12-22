import React from 'react'

export default class FeedbackFormSubmitted extends React.Component{
    render(){
      return (
        <div className="row">
        <div className="panel panel-default">
          <div className="panel-heading">다음과 같이 성공적으로 작성되었습니다.</div>
          <div className="panel-body">
            {this.props.text}
          </div>
        </div>
        </div>
      );
    }
}
