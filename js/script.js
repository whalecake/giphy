// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */


$("#search-button").click(function(){
    
    var search = $("#search-term").val();
    var newAPI = "https://api.giphy.com/v1/gifs/search?q=" + search + "&rating=pg&api_key=dc6zaTOxFJmzC";

    $(".mainContainer").html(`<div class="row1 gallery"></div><div class="row2 gallery"></div><div class="row3 gallery"></div>`)

    fetch (newAPI)

    //asynchronisity: when the fetch request comes back, THEN this will happen
    .then(function(response) {
        return response.json();
    })

    .then(function(gifData){ 
    
        $("#introText").hide();
    
        for(i=0; i<4; i++) {
            $(".row1").append(`<img class="rowOne" src=${gifData.data[i].images.original.url} height=200>`);
        }

        for(i=4; i<8; i++) {
            $(".row2").append(`<img class="rowTwo" src=${gifData.data[i].images.original.url} height=200>`);
        }

        for(i=8; i<12; i++) {
            $(".row3").append(`<img class="rowThree" src=${gifData.data[i].images.original.url} height=200>`);
        }
    
  });

});

