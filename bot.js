var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

let params = {q:'bot programming since:2018-01-01', count:10 }
search(params);


function search(params){
  T.get('search/tweets', params, function(err,data,response){
    for(let status of data.statuses){
      console.log(status.text)
    }
  });
}

function tweet(message){
  T.post('statuses/update', { status: message }, function(err,data,response){
    console.log(data);
  });
}




