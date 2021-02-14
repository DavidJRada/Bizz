
function getEvents() {

    var settings = {
        "async": true,
        "crossDomain": true,

        "url": "https://api.bizzabo.com/api/events",
        "method": "GET",
        "headers": {
            "accept": "application/vnd.bizzabo.v2.0+json",
            "authorization": "Bearer b2f9b657-d8fd-4c34-a28b-eba13cab25c2",
            "Access-Control-Allow-Origin": "*",
        },
        "data": "{}"
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}




