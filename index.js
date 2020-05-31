'use strict';

let breed = "";
let result = "";

function pull(){
    breed = $("#breed").val();
    breed = breed.toLowerCase();
    fetch("https://dog.ceo/api/breed/" + breed + "/images/random")
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.status === 'error') {
                throw new Error(responseJson)
            } else {
                display(responseJson.message)
            }
        }) 
        .catch(error => displayError(error))            
}

function displayError(error){
    let breedError = "That breed name is not valid. Please Try Again."
    $('.result').html(breedError);
}

function display(temp) {
    let result =  '<img src="' + temp + '">';  
    $('.result').html(result);
    
}

function button() {
    $('.enter').on("click", function(e){
        e.preventDefault();
        pull();
    }); 
}


$(button);