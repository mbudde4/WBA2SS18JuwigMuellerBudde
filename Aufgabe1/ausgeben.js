var	fs=require('fs');

var content;


fs.readFile("staedte.json",	function(err,	data)	{

    var obj = JSON.parse(data);
    JSON.stringify(obj(cities));
    content = data.toString();


        console.log(content);


});







