'use strict'
var DaoImpl = require('./dao/FeedbackFileDao');

class FeedbackService{
  constructor(){
    this.dao = new DaoImpl();
  }
  save(feedback){
    this.dao.save(feedback);
  }
  load(){

  }
  listFeedbacks(token){

  }
  getOne(){

  }
}
module.exports = FeedbackService;
