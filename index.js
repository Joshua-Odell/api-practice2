'use strict';

let breed = "";
let result = "";
let temp ="";
let breedList = [];
let indicator = 0;

function pull(){
    console.log(breedList);
    breed = $("#breed").val();
    breed = breed.toLowerCase();
    console.log(breed);
    indicator = breedList.includes(breed);
    // for (let i = 0; i < breedList.length; i++){
    //    if (breed === breedList[i]){
    //        indicator = 1;
    //    } 
    // }

    if (indicator === True){
        fetch("https://dog.ceo/api/breed/" + breed + "/images/random")
        .then(response => response.json())
        .then(responseJson => temp = responseJson.message)
        .then(response =>
            display());  
    }
    else {
        alert("that breed is not recognized please try again")
    }
             
}

function findBreed(){

    fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(responseJson => breedList = responseJson.message)
        .then(response => pull());            
}

function display() {
    let result =  '<img src="' + temp + '">';  
    $('.result').html(result);
    
}

function button() {
    $('.enter').on("click", function(e){
        e.preventDefault();
        findBreed();
    }); 
}


$(button);