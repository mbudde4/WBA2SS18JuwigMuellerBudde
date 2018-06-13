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

    //console.log(str);

    //Macht aus dem String ein json array und kein String array so wie split
    var staedte = JSON.parse("[" + str + "]");

    //sortiert nach population
    staedte.sort(function (a, b) {
        return a.population - b.population;
    });

    var string = JSON.stringify(staedte);
    string = string.replace(/\[/g,'{"cities":\[');
    string = string.replace(/\]/g,'\]}');
    console.log(string);
    fs.writeFile("staedte_sortiert.json", string, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });



    //console.log(staedte);

    //Ausgabe
    var i = 0;

    while (i < staedte.length)
    {
       //var object = JSON.parse(staedte[i]);


        console.log("name: " + chalk.red(staedte[i].name));
        console.log("country: " + chalk.green(staedte[i].country));
        console.log("population: " + chalk.blue(staedte[i].population));
        console.log("------------------");
        i++;
    }

});







