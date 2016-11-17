/**
* \file Server.js
* \brief 
* \date 25/06/2016
* \author AZOULAY Jordan 
*/

//--------------------------- DEPENDENCYS -------------------------------------------------------/
//----------------------------------------------------------------------------------------------/

//--------------------------- ENTITIES ---------------------------------------------------------/
//----------------------------------------------------------------------------------------------/


module.exports = function(app){
	'use strict';
	
	function index(req, res)
	{

		res.render('index',{'flashMessage' : req.flash("message")});
	}
	

	function jeuConcour(req, res)
	{
				var galleryFolder = './views/images/gallery';
		var images = new Array();
		var fs = require('fs');
		fs.readdir(galleryFolder, (err, files) => {
			
		    res.render('jeu_concour',{'flashMessage' : req.flash("message"),
			"tab" : "jeu",
			"images" : files
		});
		});	
	}
	function addPicture(req, res)
	{
		res.render('jeu_concour_new', {"tab" : "jeu"});
	}
	function tmp(req, res)
	{
			res.render('tmp',{'flashMessage' : req.flash("message")});
	}

	function restaurants(req, res)
	{
		res.render('restaurants', {"tab" : "restaurants"});
	}
	
	function f404(req, res)
	{
        res.status(404).render('404', {'url' : req.url});
	}
	

	
	
	return {
		index : index,
		f404 : f404,
		jeuConcour : jeuConcour,
		addPicture: addPicture,
		restaurants : restaurants,
		tmp : tmp
	
	}
}