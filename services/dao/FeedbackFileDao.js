'use strict'
var fs = require('fs');

class FeedbackFileDao{
  save(feedback,now){
    let filepath = './storage/'+feedback.token+".irf";
    try {
        let stats = fs.lstatSync(filepath);
        if (!stats.isDirectory()) {
          console.log("file exists. append");
          fs.appendFile(filepath,now +"|"+ feedback.text+"\n\r",function(err){
            if(err)
              console.error(err);
            console.log('Appended!');
          });
        }
    }
    catch (e) {
      console.log("new file");
      fs.writeFile(filepath,now +"|"+ feedback.text+"\n\r",function(err){
        if(err)
          console.error(err);
        console.log('Written!');
      });
    }
  }
}
module.exports = FeedbackFileDao;
