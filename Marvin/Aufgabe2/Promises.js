var	fs=require('fs');
const chalk=require('chalk');




var p = new Promise(function(resolve, reject) {

    fs.readFile("staedte.json",	function(err,	data)	{

        var content1 = data.toString();

        var obj1 = JSON.parse(content1);
        content1 = JSON.stringify(obj1);

        //String wird angepasst
        content1 = content1.replace(/\{"cities":/g,'');
        content1 = content1.replace(/\]}/g,'\]');

        //json array wird erstellt
        var alleStaedte = JSON.parse(content1);

        //Ausgabe
        var i = 0;

        while (i < alleStaedte.length) {

            console.log("name: " + chalk.red(alleStaedte[i].name));
            console.log("country: " + chalk.green(alleStaedte[i].country));
            console.log("population: " + chalk.blue(alleStaedte[i].population));
            console.log("------------------");
            i++;
        }
    });


        if() {
            reject('Failure!');

        }
        else {
                resolve('Success!');
        }


});

p.then(function() {


}).catch(function() {

    console.log("Fehler");

});