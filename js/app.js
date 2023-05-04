var http = require('http');
var fs = require('fs');



function loadPage(req, res){
    res.writeHeader(200, {'Content-Type': 'text/html'});  //getting the type of file 
	
	fs.readFile('../index.html', function(err, data){   //getting the path and reading the contents of file
		if(err){
		res.writeHead(404);
		res.write('../404.html');                   //displaying error
	 }else{
		res.write(data);                              //displaying the file
	 }
	 res.end();                                      //end response once file displayed
	});
	
}
const port = 3000;
http.createServer(loadPage).listen(port);            //create sever on port
console.log(`Server running at ${port}`)