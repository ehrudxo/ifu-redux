'use strict'
var DaoImpl = require('./dao/FeedbackFileDao');

class FeedbackService{
  constructor(){
    this.dao = new DaoImpl();
  }
  saveAndReturn(feedback){
    let now = (new Date()).toString();
    this.dao.save(feedback,now);
    return {"lastUpdated": now,feedback}
  }
  load(){

  }
  listFeedbacks(token){

  }
  getOne(){

  }
}
module.exports = FeedbackService;
