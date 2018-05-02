var	fs=require('fs');
const chalk=require('chalk');

var obj1;
var obj2;
var content1;
var content2;
var staedte1;
var staedte2;
var err1=0;
var err2=0;





var p = new Promise(function(resolve, reject) {


    fs.readFile("staedte.json",	function(err,	data)	{

        if (err==true)
        {
        err1=err;


        content1 = data.toString();

        obj1 = JSON.parse(content1);
        content1 = JSON.stringify(obj1);

        //String wird angepasst
        content1 = content1.replace(/\{"cities":/g,'');
        content1 = content1.replace(/\]}/g,'\]');

        //json array wird erstellt
        staedte1 = JSON.parse(content1);


    });

    fs.readFile("mehr_staedte.json",	function(err,	data)	{

        err2=err;

        content2 = data.toString();

        obj2 = JSON.parse(content2);
        content2 = JSON.stringify(obj2);

        //String wird angepasst
        content2 = content2.replace(/\{"cities":/g,'');
        content2 = content2.replace(/\]}/g,'\]');

        //json array wird erstellt
        staedte2 = JSON.parse(content1);


    });


    var test=0;

        if(err!=0 || err2!=0) {

            resolve('Success!');
        }
        else {
            reject('Failure!');
        }




});

p.then(function() {

    console.log("Kein Fehler");

    var alleStaedte = staedte1.concat(staedte2);


    //Ausgabe
    var i = 0;


    while (i < alleStaedte.length) {

        console.log("name: " + chalk.red(alleStaedte[i].name));
        console.log("country: " + chalk.green(alleStaedte[i].country));
        console.log("population: " + chalk.blue(alleStaedte[i].population));
        console.log("------------------");
        i++;
    }

}).catch(function() {

    console.log("Fehler");

});
