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






var p = new Promise(function(resolve, reject) {




    fs.readFile("staedte.json",	function(err,	data)	{



        content1 = data.toString();

        obj1 = JSON.parse(content1);
        content1 = JSON.stringify(obj1);

        //String wird angepasst
        content1 = content1.replace(/\{"cities":/g,'');
        content1 = content1.replace(/\]}/g,'\]');

        //json array wird erstellt
        staedte1 = JSON.parse(content1);

      /*  //Ausgabe1
        var i = 0;


        while (i < staedte1.length) {

            console.log("name: " + chalk.red(staedte1[i].name));
            console.log("country: " + chalk.green(staedte1[i].country));
            console.log("population: " + chalk.blue(staedte1[i].population));
            console.log("------------------");
            i++;
        }

        */

        if (err==true) {
            err1 = err;
        }


    });

    fs.readFile("mehr_staedte.json",	function(err,	data)	{




        content2 = data.toString();

        obj2 = JSON.parse(content2);
        content2 = JSON.stringify(obj2);

        //String wird angepasst
        content2 = content2.replace(/\{"cities":/g,'');
        content2 = content2.replace(/\]}/g,'\]');

        //json array wird erstellt
        staedte2 = JSON.parse(content2);

        //Ausgabe2
      /*  var i = 0;


        while (i < staedte2.length) {

          console.log("name: " + chalk.red(staedte2[i].name));
          console.log("country: " + chalk.green(staedte2[i].country));
          console.log("population: " + chalk.blue(staedte2[i].population));
          console.log("------------------");
          i++;
        }

      */




        if (err==true) {
            err2 = err;
        }


    });


    if(err1!=0 || err2!=0) {

        reject('Failure!');
    }
    else {

        resolve('Success!');
    }


});

p.then(function() {

    console.log("Kein Fehler");

    /* alleStaedte = staedte1.concat(staedte2);



      //Ausgabe
     var i = 0;


      while (i < alleStaedte.length) {

          console.log("name: " + chalk.red(alleStaedte[i].name));
          console.log("country: " + chalk.green(alleStaedte[i].country));
          console.log("population: " + chalk.blue(alleStaedte[i].population));
          console.log("------------------");
          i++;
      }
      */

}).catch(function() {

    console.log("Fehler");

});
