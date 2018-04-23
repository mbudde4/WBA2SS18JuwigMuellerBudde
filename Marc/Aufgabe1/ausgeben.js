var	fs=require('fs');

var content;


fs.readFile("staedte.json",	function(err,	data)	{


    content = data.toString();
    content = content.replace(/[{}]/g, '');
    content = content.replace(/["]/g, '');
    content = content.replace(/\[/g,"").replace(/\]/g,"");
    content = content.replace("cities:", '');


    var array = content.split(' ,');
    //console.log(array[0]);


   // var myobj = JSON.parse(JSON.stringify(content));
    //console.log(content);

    var i = 0;

    while (i < array.length-1)
    {
        console.log(array[i]);
        console.log("      ---------------");
        i++;
    }


});







