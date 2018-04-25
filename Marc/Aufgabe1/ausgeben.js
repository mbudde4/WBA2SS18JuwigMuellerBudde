var	fs=require('fs');

var content;


fs.readFile("staedte.json",	function(err,	data)	{


    content = data.toString();

    var obj = JSON.parse(content);
    var str = JSON.stringify(obj);

    //cities und eckige klammern werden rausgeschmissen damit man später parsen kann
    str = str.replace(/\{"cities":\[/g,'');
    str = str.replace(/\]}/g,'');
    str = str.replace(/},/g,'} , ');

    //Splittet den String in ein Array
    var array = str.split(' , ');

    //console.log(str);

    var i = 0;

    while (i < array.length-1)
    {
        var obj = JSON.parse(array[i]);
        console.log("name: " + obj.name);
        console.log("country: " + obj.country);
        console.log("population: " + obj.population);
        console.log("------------------");
        i++;
    }


});







