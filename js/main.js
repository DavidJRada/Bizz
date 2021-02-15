
$(document).ready(function () {
  requestCurrent()
})


// function getEvents() {

// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://api.bizzabo.com/api/events",
//     "method": "GET",
//     "Content-type": "application/x-www-form-urlencoded",
//     "headers": {
//         "accept": "application/vnd.bizzabo.v2.0+json",
//         "authorization": "Bearer b2f9b657-d8fd-4c34-a28b-eba13cab25c2",
//         "Access-Control-Allow-Origin": "*",
//     },
//     "data": "{}"
// }


// $.ajax({
//     "url": "https://www.api.bizzabo.com/api/events",
//     "method": "GET",
//     "Content-type": "application/x-www-form-urlencoded",
//     "headers": {
//         "accept": "application/vnd.bizzabo.v2.0+json",
//         "authorization": "Bearer b2f9b657-d8fd-4c34-a28b-eba13cab25c2",
//         "Access-Control-Allow-Origin": "*",
//     }
// }).done(function (data) {
//     console.log(data);
// });


//     var data = "{}";

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === this.DONE) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("GET", "https://api.bizzabo.com/api/events/");
// xhr.setRequestHeader("accept", "application/vnd.bizzabo.v2.0+json");
// xhr.setRequestHeader("authorization", "Bearer b2f9b657-d8fd-4c34-a28b-eba13cab25c2");

// xhr.send(data);



const requestCurrent = () => {
  $.ajax({
    //Included city and unit variables
    url: "https://api.bizzabo.com/api/events/",
    type: "GET",
    headers: {
      "accept": "application/vnd.bizzabo.v2.0+json",
      "authorization": "Bearer b2f9b657-d8fd-4c34-a28b-eba13cab25c2",
    },
    data: {

    }
    //Pull out the relevant information and assign them to variables to be used in the classes
  }).then(function (data) {
    console.log(data)


  })
}


// })




//0d4a536dd84f2c41a282e010c8caaf60



