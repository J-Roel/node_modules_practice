//This is where you should incorporate your modules and execute your app


//MODULES----------------------------------------------
var fs = require('fs');
var responseObj = require('./autoResponse.js');
var weekday = require('weekday');


var day = weekday();


//Print to file
fs.writeFile("./test", responseObj.response(day), function(err) {
    if(err) {
        return console.log(err);
    }
}); 