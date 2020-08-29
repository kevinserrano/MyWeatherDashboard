var searchesSaved = JSON.parse(window.localStorage.getItem("userSearch")) || [];
console.log(searchesSaved);

for (var i = 0; i < searchesSaved.length; i++) {
    makelist(savedSearches)
}
var apiKey = "6441e6e31c53654c07024f7ffc57d21a";



var title = $("header").text("Weather Dashboard")
title.attr("style",
    "background-color: rgb(47, 47, 48); color: white; text-align: center; height: 70px; font-size: xx-large; padding-top: .5%"
);
$("body").prepend(title);

$(document).ready(function () {

    var newSearch = $("#new-info");

    $("#button").on("click", function () {
        event.preventDefault()
        console.log("working")


        var userSearch = $("#search").val();
        console.log(userSearch)

        searchesSaved.push(userSearch)

        window.localStorage.setItem(userSearch, JSON.stringify(searchesSaved));
        weatherInfo(userSearch);

        $(newSearch).append(userSearch + ("<br>"));
    });


});

function weatherInfo(userSearch) {
    var weatherTemp = $("#weather-conditions");
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + userSearch + "&units=imperial&appid=" + apiKey;



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $(weatherTemp).append(JSON.stringify(response));

    })

}