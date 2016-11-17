/**
* \file Server.js
* \brief 
* \date 25/06/2016
* \author AZOULAY Jordan 
*/

//--------------------------- DEPENDENCYS ----------------------------------------- -------------/

//----------------------------------------------------------------------------------------------/

//--------------------------- ENTITIES --------------------------------------------------------/
var Client = require('node-rest-client').Client;
//--------------------------------------------------------------------------------------------/

module.exports = function(app){
	'use strict';   
	var url = " https://api.instagram.com/v1/tags/${tagname}/media/recent?access_token=${token}";
    var args = {
        path : {"tagname" : app.hashtag , "token" : app.token}
    }
    function getInsta()
    {
        var client = new Client();
        client.get(url, args, function(data, response){
            console.log(data, "data");
        })

    }

	return {
          getInsta: getInsta
	}
}