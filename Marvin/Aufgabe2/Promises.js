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
var allestaedte;




var p1 = new Promise(function(resolve, reject) {


    fs.readFile("staedte.json",	function(err,	data)	{


        content1 = data.toString();

        obj1 = JSON.parse(content1);

        obj1 = obj1.cities;

        //json array wird erstellt
        staedte1 = obj1;


        if (err==true) {
            err1 = err;
        }

        if(err1!=0 || err2!=0) {

            reject('Failure!');
        }
        else {

            resolve('Success!');
        }

    });

});

var p2 = new Promise(function(resolve, reject) {


    fs.readFile("mehr_staedte.json",	function(err,	data)	{


        content2 = data.toString();

        obj2 = JSON.parse(content2);

        obj2 = obj2.cities;

        //json array wird erstellt
        staedte2 = obj2;


        if (err==true) {
            err2 = err;
        }

        if(err1!=0 || err2!=0) {

            reject('Failure!');
        }
        else {

            resolve('Success!');
        }


    });
});



Promise.all([p1,p2]).then(function() {

    console.log("Kein Fehler");

    alleStaedte = staedte1.concat(staedte2);



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
