var	fs=require('fs');

var content;


fs.readFile("staedte.json",	function(err,	data)	{


    content = data.toString();
    content = content.replace(/[{}]/g, '');
    content = content.replace(/["]/g, '');
    //content = content.replace(/[,]/g, '');
    content = content.replace(/[[]/g, '');
    //content = content.replace(/[]/g, '');
    content = content.replace("cities:", '');


   // var myobj = JSON.parse(JSON.stringify(content));
        console.log(content);


});







