var searchesSaved = JSON.parse(window.localStorage.getItem("userSearch")) || [];
console.log(searchesSaved);

for (var i = 0; i < searchesSaved.length; i++) {
    makelist(savedSearches)
}
var apiKey = "6441e6e31c53654c07024f7ffc57d21a";


//Added header with some css stying just to show I can
var title = $("header").text("Weather Dashboard")
title.attr("style",
    "background-color: rgb(47, 47, 48); color: white; text-align: center; height: 70px; font-size: xx-large; padding-top: .5%"
);
$("body").prepend(title);

$(document).ready(function () {

    var newSearch = $("#new-info");
    //Adding event listener to my search button
    $("#button").on("click", function () {
        event.preventDefault()
        //make sure event listener is working
        console.log("working")

        //Create a var that holds what is typed into the search area
        var userSearch = $("#search").val();
        //make sure it works
        console.log(userSearch)
        //This function is just adding the cities being searched to the list
        searchesSaved.push(userSearch)
        //When entering new city im checking the searchesSaved var to see if city has already been searched
        //If not then push it into the searchesSaved var
        window.localStorage.setItem(userSearch, JSON.stringify(searchesSaved));
        //calling a function
        weatherInfo(userSearch);
        //appending new search to html
        $(newSearch).prepend(userSearch + ("<br>"));
    });


});

function weatherInfo(userSearch) {
    var nameTime = $("#main");
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userSearch + "&units=imperial&APPID=" + apiKey;
    var currentTemp = $("#temp");
    var humidity = $("#humidity");
    var wind = $("#wind");
    var imageUrl = "http://openweathermap.org/img/wn/"



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var windSpeed = Math.floor(response.wind.speed)
        var Temperature = Math.floor(response.main.temp)

        $(nameTime).text(response.name + moment().format(' (MM/DD/YYYY)'));
        $(nameTime).append($("<img>").attr("src", imageUrl + response.weather[0].icon + "@2x.png"))
        console.log(imageUrl + response.weather[3])


        $(currentTemp).text("Temperature: " + JSON.stringify(Temperature));

        $(humidity).text("Humidity: " + JSON.stringify(response.main.humidity));
        console.log(response)


        $(wind).text("Wind Speed: " + JSON.stringify(windSpeed) + " MPH");
        console.log(response)

        var lat = response.




        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/uvi?" + "lat=" +
                lat + "&lon = " + lon + "&APPID = " + apiKey,
            method: "GET"
        }).then(function (uvIndexResponse) {

            var uvNumber = uvIndexResponse.value;
            var uvColor;
            if (uvNumber <= 3) {
                uvColor = "green";
            } else {
                uvColor = "red";
            }

        })
    })

}