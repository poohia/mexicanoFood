//--------------------------- DEPENDENCYS -------------------------------------------------------/
//----------------------------------------------------------------------------------------------/

//--------------------------- ENTITIES ---------------------------------------------------------/
//----------------------------------------------------------------------------------------------/


module.exports = function(app){
	'use strict';
	
	function f404(req, res)
	{
        res.status(404).render('404', {'url' : req.url});
	}
	
	
	
	return {
		f404 : f404,
	}
}