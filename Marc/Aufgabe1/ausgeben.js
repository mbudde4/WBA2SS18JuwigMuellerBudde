var	fs=require('fs');
const chalk=require('chalk');



var content;


fs.readFile("staedte.json",	function(err,	data)	{


    content = data.toString();

    var obj = JSON.parse(content);
    var str = JSON.stringify(obj);

    //cities und eckige klammern werden rausgeschmissen damit man später parsen kann
    str = str.replace(/\{"cities":\[/g,'');
    str = str.replace(/\]}/g,'');

    str = str.replace(/},/g,'} , ');
    console.log(str);
    //Splittet den String in ein Array
    var staedte = str.split(' , ');





    console.log(staedte);
    //console.log(str);

    var i = 0;


    while (i < staedte.length)
    {
        var obj = JSON.parse(staedte[i]);

        console.log("name: " + chalk.red(obj.name));
        console.log("country: " + chalk.green(obj.country));
        console.log("population: " + chalk.blue(obj.population));
        console.log("------------------");
        i++;
    }



});







