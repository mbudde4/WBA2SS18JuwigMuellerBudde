var	fs=require('fs');
const chalk=require('chalk');

    var promise = new Promise(function(resolve, reject){

            var staedte;
            resolve(staedte);

    });



    promise.then(first).then(second).then(function(response){
        //Ausgabe
       /* var i = 0;

        while (i < alleStaedte.length) {

            console.log("name: " + chalk.red(alleStaedte[i].name));
            console.log("country: " + chalk.green(alleStaedte[i].country));
            console.log("population: " + chalk.blue(alleStaedte[i].population));
            console.log("------------------");
            i++;
        }*/
       console.log(response);
    });

    function first(staedte) {

         staedte = fs.readFile("staedte.json",	function(err,	data)	{

            var content1 = data.toString();

            var obj1 = JSON.parse(content1);
            content1 = JSON.stringify(obj1);

            //String wird angepasst
            content1 = content1.replace(/\{"cities":/g,'');
            content1 = content1.replace(/\]}/g,'\]');

            //json array wird erstellt
            var staedte1 = JSON.parse(content1);
            return staedte1;
        });
        return staedte;
    }

    function second(staedte) {

        var staedte2 = fs.readFile("mehr_staedte.json", function second(err,	data) {

            var content2 = data.toString();

            var obj2 = JSON.parse(content2);
            content2 = JSON.stringify(obj2);
            //String wird angepasst
            content2 = content2.replace(/\{"cities":/g, '');
            content2 = content2.replace(/\]}/g, '\]');
            //zweites json array wird erstellt
            var staedte2 = JSON.parse(content2);
            return staedte2;
        });

        var alleStaedte = staedte.concat(staedte2);
        return alleStaedte;

    }









