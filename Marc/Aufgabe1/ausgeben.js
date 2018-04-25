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
    /*str = str.replace(/"name"/g, 'name');
    str = str.replace(/"country"/g, 'country');
    str = str.replace(/"population"/g, 'population');*/
    str = str.replace(/},/g,'} , ');
    console.log(str);
    //Splittet den String in ein Array
    var array = str.split(' , ');

    function compareNumbers(a, b) {
        return a - b;
    }
    array.sort(function (a, b) {
        return a.population - b.population;
    });
    console.log(array);
    //console.log(str);

    var i = 0;

    while (i < array.length)
    {
        var obj = JSON.parse(array[i]);

        console.log("name: " + chalk.red(obj.name));
        console.log("country: " + chalk.green(obj.country));
        console.log("population: " + chalk.blue(obj.population));
        console.log("------------------");
        i++;
    }



});







