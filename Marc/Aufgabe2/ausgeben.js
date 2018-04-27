var	fs=require('fs');
const chalk=require('chalk');


fs.readFile("staedte.json",	function(err,	data)	{

    var content1 = data.toString();

    var obj1 = JSON.parse(content1);
    content1 = JSON.stringify(obj1);

    content1 = content1.replace(/\{"cities":/g,'');
    content1 = content1.replace(/\]}/g,'\]');

    //console.log(content1);
    var staedte1 = JSON.parse(content1);
   // console.log(staedte1);


    fs.readFile("mehr_staedte.json",	function(err,	data)	{


        var content2 = data.toString();

        var obj2 = JSON.parse(content2);
        content2 = JSON.stringify(obj2);

        content2 = content2.replace(/\{"cities":/g,'');
        content2 = content2.replace(/\]}/g,'\]');

       // console.log(content2);

        var staedte2 = JSON.parse(content2);
        //console.log(staedte2);



        var alleStaedte = staedte1.concat(staedte2);

        //console.log(alleStaedte);

        //Ausgabe
        var i = 0;

        while (i < alleStaedte.length)
        {
            //var object = JSON.parse(staedte[i]);


            console.log("name: " + chalk.red(alleStaedte[i].name));
            console.log("country: " + chalk.green(alleStaedte[i].country));
            console.log("population: " + chalk.blue(alleStaedte[i].population));
            console.log("------------------");
            i++;
        }


    });

});