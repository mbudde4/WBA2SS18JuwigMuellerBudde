
//nr1
for ( var x = 0; x < 10; x++) {

    console.log(x);

    setTimeout(function () { console.log("The number is" + x);}, 100);

}

//nr2
function getTweets( id {
    return fetch ( ”https://api.twitter.com/user/” + id)
        .then(function (response) {
            return JSON.parse(response);
        }).then(function (response) {
            return response.data;}).
    then
    (
        function
            (
                tweets
            ) {
            return
            tweets
                .
                filter
                (
                    function
                        (
                            tweet
                        ) {
                        return
                        tweet
                            .
                            stars
                        >
                        50
                    })
        }).
    then
    (
        function
            (
                tweets
            ) {
            return
            tweets
                .
                filter
                (
                    function
                        (
                            tweet
                        ) {
                        return
                        tweet
                            .
                            rts
                        > 50
                    })
        })
}