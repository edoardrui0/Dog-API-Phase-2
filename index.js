"use strict";

function getDogImage(numOfDogs = 3) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogs}`)
    .then((response) => response.json())
    // the console.log(responseJson)) displays an array with all of the links to our random dog pics.
    .then((responseJson) => displayResults(responseJson))
    .catch((error) =>
      alert("It appears your internet is disconnected. Please try again later.")
    );
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $(".results").html(`<h2>Look at these dogs!</h2>`);

  for (let dog of responseJson.message) {
    $(".results").append(`<img src="${dog}" class="results-img">`);
  }
  //display the results section
  $(".results").removeClass("hidden");
}
function printResults() {
  $("form").submit((event) => {
    event.preventDefault();
    // i call the input here, get its value and later call the variable with i call the "getDogImage" function.
    let numberOfDogs = $('input[name="numberForAmountOfDogsPics"]').val();
    getDogImage(numberOfDogs);
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  printResults();
});
