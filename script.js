var searchesSaved = JSON.parse(window.localStorage.getItem("userSearch")) || [];
console.log(searchesSaved);

for (var i = 0; i < searchesSaved.length; i++) {
    makelist(savedSearches)
}
var apiKey = "trilogy";



var title = $("header").text("Weather Dashboard")
title.attr("style",
    "background-color: rgb(47, 47, 48); color: white; text-align: center; height: 70px; font-size: xx-large; padding-top: .5%"
);
$("body").prepend(title);

$(document).ready(function () {

    $("#button").on("click", function () {
        event.preventDefault()
        console.log("working")

        var userSearch = $("#search").val()
        console.log(userSearch)

        searchesSaved.push(userSearch)

        window.localStorage.setItem(userSearch, JSON.stringify(searchesSaved));
        weatherInfo(searchesSaved)

    });

});