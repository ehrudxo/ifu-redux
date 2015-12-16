import React from 'react'

export default class FeedbackFormSubmitted extends React.Component{
    render(){
      return (
        <div>
         다음과 같이 성공적으로 작성되었습니다.
         <br/>
         <div>{this.props.text}
         </div>
        </div>
      );
    }
}
