import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'

class FeedbackFormSubmitted extends React.Component{
    render(){
      let {feedback,feedbacks} = this.props;
      return (
        <div className="row">
        <div className="panel panel-default">
          <div className="panel-heading">다음과 같이 성공적으로 작성되었습니다.</div>
          <div className="panel-body">
            {feedback.text}
          </div>
          <br/>
          <Link className="btn btn-primary btn-lg btn-block"
                to="/asdf">ASDF</Link>
        </div>
        </div>
      );
    }
}
function mapStateToProps(state,stateProps) {
  const {
    feedback : feedback,
    feedbacks: feedbacks
  } = state.feedbacksByServer || {
    feedback : {text:""},
    feedbacks: []
  };

  return {
    feedback,
    feedbacks
  };
}
export default connect(mapStateToProps)(FeedbackFormSubmitted);
