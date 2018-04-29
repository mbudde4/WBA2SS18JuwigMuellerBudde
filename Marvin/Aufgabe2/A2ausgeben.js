var	fs=require('fs');
const chalk=require('chalk');



var content;


fs.readFile("staedte.json",	function(err,	data) {

    //AUsgabe 2:
    fs.readFile("mehr_staedte.json", function (err, data) {

        content2 = data.toString();

        var obj2 = JSON.parse(content2);
        var str2 = JSON.stringify(obj2);

        //cities und eckige klammern werden rausgeschmissen damit man später parsen kann
        str2 = str2.replace(/\{"cities":\[/g, '');
        str2 = str2.replace(/\]}/g, '');

        //console.log(str2);

                //Macht aus dem String ein json array und kein String array so wie split
                var staedte2 = JSON.parse("[" + str2 + "]");

                //sortiert nach population
                staedte2.sort(function (a, b) {
                    return a.population - b.population;
                });

                var string = JSON.stringify(staedte2);
                string = string.replace(/\[/g,'{"cities":\[');
                string = string.replace(/\]/g,'\]}');
                //console.log(string);
                fs.writeFile("mehr_staedte_sortiert.json", string, function(err) {
                    if(err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");
                });



                //console.log(staedte);

                //Ausgabe
                var i = 0;

                while (i < staedte2.length)
                {
                    //var object = JSON.parse(staedte[i]);


                    console.log("name: " + chalk.red(staedte2[i].name));
                    console.log("country: " + chalk.green(staedte2[i].country));
                    console.log("population: " + chalk.blue(staedte2[i].population));
                    console.log("------------------");
                    i++;
                }



    });

//AUsgabe1:

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
    //console.log(string);
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
