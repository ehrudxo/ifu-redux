'use strict'
var fs = require('fs');

class FeedbackFileDao{
  save(feedback){
    let filepath = './storage/'+feedback.token+".irf";
    let dateString = (new Date()).toString();
    try {
        let stats = fs.lstatSync(filepath);
        if (!stats.isDirectory()) {
          console.log("file exists. append");
          fs.appendFile(filepath,dateString +"|"+ feedback.text+"\n\r",function(err){
            if(err)
              console.error(err);
            console.log('Appended!');
          });
        }
    }
    catch (e) {
      console.log("new file");
      fs.writeFile(filepath,dateString +"|"+ feedback.text+"\n\r",function(err){
        if(err)
          console.error(err);
        console.log('Written!');
      });
    }
  }
}
module.exports = FeedbackFileDao;
