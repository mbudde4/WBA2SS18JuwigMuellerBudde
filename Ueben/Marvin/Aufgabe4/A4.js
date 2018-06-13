
//4.1:
/*
for(var x = 0; x < 10; x++) {

    console.log(x);

    setTimeout(function() {
        console.log('The number is'  + x);
    }, 1000);

}
*/

//4.2:
/*
function getTweets( id ) {
    return fetch("https://api.twitter.com/user/" +"${id}" )
        .then(function(response) {
        return JSON.parse(response);
    }).then( function(response) {
        return response.data;
    }).then(function(tweets) {
        return tweets.filter(function(tweet) {
            return tweet.stars > 50    })
    }).then(function(tweets) {
        return tweets.filter(function(tweet) {
            return tweet.rts > 50
        })
    })
}
*/


//4.3

let array =[32, 45, 7, 8];
console.log(sortarray(array));



function sortarray (array) {

    return array.sort(sortNumber);

}

function sortNumber(a,b) {
    return a - b;
}




